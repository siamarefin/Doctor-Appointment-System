import { useDataContext } from "@/context/DataContext";
import "./style.css"; // Import the general table styles

function AllDoctor() {
    const { doctorInfo } = useDataContext();

    return (
        <div className="table-container">
            <div className="overflow-auto flex-grow">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Dept</th>
                            <th>Qualification</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Specialist</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorInfo.length > 0 ? (
                            doctorInfo.map((doctor, index) => (
                                <tr key={index}>
                                    <td className="overflow-hidden">{doctor.name}</td>
                                    <td className="overflow-hidden">{doctor.department}</td>
                                    <td className="overflow-hidden">{doctor.qualification}</td>
                                    <td className="overflow-hidden">{doctor.age}</td>
                                    <td className="overflow-hidden">{doctor.gender}</td>
                                    <td className="overflow-hidden">{doctor.specialist}</td>
                                    <td className="overflow-hidden">{doctor.phone}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="no-data">
                                    No doctors available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllDoctor;
