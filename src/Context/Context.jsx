import { account, COLLECTION_ID_STUDENTATTENDENCE, COLLECTION_ID_STUDENTDATA, DATABASE_ID, databases } from "@/Appwrite/AppwriteConfig";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ID, Query } from "appwrite";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ContextProvider = (props) => {
    const navigate = useNavigate();
    const { removeItem } = useLocalStorage();
    const [change, setChange] = useState(true);
    const [loader, setLoader] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [studentData, setStudentData] = useState([]);
    const [studentAttendance, setStudentAttendance] = useState([]);
    const [singleAttendance, setSingleAttendance] = useState([]);
    const [documentId, setDocumentId] = useState("");

    const onLogout = async () => {
        try {
            await account.deleteSession("current");
            removeItem("user");
            navigate("/login");
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const fetchUserInfo = async () => {
        setLoader(true);
        try {
            const res = await account.get();
            setUserInfo(res);
        } catch (err) {
            console.error('Error fetching user info:', err);
            navigate("/login");
        } finally {
            setLoader(false);
        }
    };

    const fetchStudentData = async () => {
        try {
            const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_STUDENTDATA);
            setStudentData(response.documents);
        } catch (err) {
            console.error('Error fetching student data:', err);
        }
    };

    const fetchStudentAttendance = async () => {
        try {
            const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_STUDENTATTENDENCE);
            setStudentAttendance(response.documents);
        } catch (err) {
            console.error('Error fetching student attendance:', err);
        }
    };

    const studentDelete = async (student_id) => {
        try {
            await databases.deleteDocument(DATABASE_ID, COLLECTION_ID_STUDENTDATA, student_id);
            setStudentData(prevStudent => prevStudent.filter(student => student.$id !== student_id));
        } catch (err) {
            console.error('Error deleting student:', err);
        }
    };

    const checkIn = async (id, checkin) => {
        try {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const currentTime = `${hours}:${minutes}:${seconds}`;

            console.log("current", currentTime);
            const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_STUDENTDATA, [Query.equal("stdid", id)]);
            const documents = response.documents;
            await Promise.all(documents.map(doc =>
                databases.createDocument(
                    DATABASE_ID,
                    COLLECTION_ID_STUDENTATTENDENCE,
                    ID.unique(),
                    {
                        stdid: doc.stdid,
                        name: `${doc.firstname} ${doc.lastname}`,
                        attendence: checkin,
                        date: new Date().toISOString(),
                        intime: currentTime
                    }
                )
            ));
            setChange(false);
        } catch (err) {
            console.error('Error checking in:', err);
        }
    };


    const checkOut = async () => {
        try {
            // Fetch the latest single user attendance before updating
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_STUDENTATTENDENCE,
                userInfo ? [Query.equal("stdid", userInfo.$id)] : []
            );

            const attendanceRecords = response.documents;

            if (attendanceRecords.length === 0) {
                console.error('No attendance records found for checkout.');
                return;
            }

            const lastAttendance = attendanceRecords[attendanceRecords.length - 1];
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const currentTime = `${hours}:${minutes}:${seconds}`;

            console.log("current", currentTime);
            await databases.updateDocument(
                DATABASE_ID,
                COLLECTION_ID_STUDENTATTENDENCE,
                lastAttendance.$id,
                {
                    outtime: currentTime
                }
            );
            setChange(true);
        } catch (err) {
            console.error('Error checking out:', err);
        }
    };


    const getSingleUserAttendance = async () => {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_STUDENTATTENDENCE,
                userInfo ? [Query.equal("stdid", userInfo.$id)] : []
            );
            setSingleAttendance(response.documents);
            console.log("Attendance", response.documents);
        } catch (err) {
            console.error('Error fetching single user attendance:', err);
        }
    };

    useEffect(() => {
        fetchUserInfo();
        fetchStudentData();
        fetchStudentAttendance();
    }, []);

    useEffect(() => {
        if (userInfo) {
            getSingleUserAttendance();
        }
    }, [userInfo]);

    const contextValue = {
        onLogout,
        studentData,
        studentDelete,
        studentAttendance,
        userInfo,
        fetchUserInfo,
        loader,
        checkIn,
        change,
        setChange,
        singleAttendance,
        documentId,
        setDocumentId,
        checkOut
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
