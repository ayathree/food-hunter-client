import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const {data : users=[], refetch}= useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users')
            return res.data

        }
    })

    const handleMakeAdmin=user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
                alert(`${user.name} is an admin now`)
                refetch()
                
            }
        })
    }
    const handleDelete=user=>{
        axiosSecure.delete(`/users/${user._id}`)
        .then(res=>{
           if (res.data.deletedCount >0) {
            alert('deleted successfully')
            refetch()
             
           }
        })

    }
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">
                    All users
                </h2>
                <h2 className="text-3xl">
                    Total user: {users.length}
                </h2>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Roll</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index)=><tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role ==='admin'? 'Admin': <button onClick={()=>handleMakeAdmin(user)} className="btn">Role</button>
                
                }
            </td>
            <td><button onClick={()=>handleDelete(user)} className="btn">Delete</button></td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
            </div>
            
        </div>
    );
};

export default AllUsers;