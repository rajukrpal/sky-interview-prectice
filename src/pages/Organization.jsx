import { UserService } from "@/services/user"
import React, { useEffect, useState } from "react"

function Organization() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [name, setName] = useState("")
  const [mode, setMode] = useState("view") 

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    const res = await UserService.getAllUserList()
    setUsers(res.data)
    setLoading(false)
  }

  // DELETE
const handleDeleteUser = async (userId) => {
  await UserService.deleteUser(userId)
  setUsers((prevUsers) =>
    prevUsers.filter((user) => user.id !== userId)
  )
}

  // VIEW
  const handleView = (user) => {
    setSelectedUser(user)
    setMode("view")
    setShowModal(true)
  }

  // EDIT
  const handleEdit = (user) => {
    setSelectedUser(user)
    setName(user.name)
    setMode("edit")
    setShowModal(true)
  }

  // UPDATE
  const handleUpdate = async () => {
    await UserService.updateUser(selectedUser.id, { name })
    setShowModal(false)
    fetchUsers()
  }

  if (loading) return <p className="p-6">Loading...</p>

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Organization Users</h1>

      {users.map((user) => (
        <div
          key={user.id}
          className="border p-3 mb-2 flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <div className="space-x-2">
            <button
              onClick={() => handleView(user)}
              className="px-2 py-1 border rounded"
            >
              View
            </button>

            <button
              onClick={() => handleEdit(user)}
              className="px-2 py-1 border rounded"
            >
              Edit
            </button>

            <button
              onClick={() => handleDeleteUser(user.id)}
              className="px-2 py-1 border rounded text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/*  CENTER MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-5 rounded w-80">
            <h2 className="font-bold mb-3">
              {mode === "view" ? "User Details" : "Edit User"}
            </h2>

            {mode === "view" ? (
              <>
                <p><b>Name:</b> {selectedUser.name}</p>
                <p><b>Email:</b> {selectedUser.email}</p>
              </>
            ) : (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border w-full p-2 mb-3"
              />
            )}

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-1 border rounded"
              >
                Close
              </button>

              {mode === "edit" && (
                <button
                  onClick={handleUpdate}
                  className="px-3 py-1 bg-black text-white rounded"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Organization
