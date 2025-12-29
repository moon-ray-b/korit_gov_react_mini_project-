/** @jsxImportSource @emotion/react */
import { LuPen } from "react-icons/lu";
import * as s from "./styles";
import { IoMdList } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function SideBar({ setShowSideBar }) {
    const navigate = useNavigate();
    return (
        <div css={s.container}>
            <div css={s.topBox}>
                <div>메뉴</div>
                <button onClick={() => setShowSideBar((prev) => !prev)}>
                    <IoClose />
                </button>
            </div>
            <div css={s.bottomBox}>
                <ul>
                    <li
                        onClick={() => {
                            navigate("/board/list");
                            setShowSideBar((prev) => !prev);
                        }}>
                        <IoMdList />
                        게시물 보기
                    </li>
                    <li
                        onClick={() => {
                            navigate("/board/add");
                            setShowSideBar((prev) => !prev);
                        }}>
                        <LuPen />
                        글쓰기
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
