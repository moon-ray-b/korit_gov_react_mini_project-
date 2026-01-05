import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/admin/DashBoardPage/DashBoardPage";
import ManageUserpage from "../pages/admin/ManageUserPage/ManageUserpage";
import UserDetailPage from "../pages/admin/UserDetailPage/UserDetailPage";
import ManageBoardPage from "../pages/admin/ManageBoardPage/ManageBoardPage";
import BoardDetailPage from "../pages/admin/BoardDetailPage/BoardDetailPage";

function AdminRouter() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<DashBoardPage />} />
                <Route path="/manage/user" element={<ManageUserpage />} />
                <Route
                    path="/manage/user/:username"
                    element={<UserDetailPage />}
                />
                <Route path="/manage/board" element={<ManageBoardPage />} />
                <Route
                    path="/manage/board/:boardId"
                    element={<BoardDetailPage />}
                />
            </Routes>
        </>
    );
}

export default AdminRouter;
