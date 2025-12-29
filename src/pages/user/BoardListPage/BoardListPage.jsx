/** @jsxImportSource @emotion/react */
import { IoArrowBack } from "react-icons/io5";
import * as s from "./styles";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
function BoardListPage() {
    const navigate = useNavigate();
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div  onClick={()=> navigate("/")}>
                    <IoArrowBack />홈
                </div>
                <div>
                    <div>게시물</div>
                    <div>
                        <LuSearch />
                        <input
                            type="text"
                            placeholder="게시물 제목을 검색하세요"
                        />
                    </div>
                </div>
                <div css={s.listContainer}>
                    <ul>
                        <li onClick={()=> navigate("/board/1")}>
                            <div>
                                <h4>React 18의 새로운 기능들</h4>
                                <p>뭐 새로운거 추가 됐다 한다</p>
                            </div>
                            <div css={s.boardBottomBox}>
                                <div>
                                    <div>배</div>
                                    <p>배개발</p>
                                </div>
                                <div>
                                    <p>2025.12.29</p>
                                </div>
                            </div>
                        </li>
                         <li>
                            <div>
                                <h4>React 18의 새로운 기능들</h4>
                                <p>뭐 새로운거 추가 됐다 한다</p>
                            </div>
                            <div css={s.boardBottomBox}>
                                <div>
                                    <div>배</div>
                                    <p>배개발</p>
                                </div>
                                <div>
                                    <p>2025.12.29</p>
                                </div>
                            </div>
                        </li>
                         <li>
                            <div>
                                <h4>React 18의 새로운 기능들</h4>
                                <p>뭐 새로운거 추가 됐다 한다</p>
                            </div>
                            <div css={s.boardBottomBox}>
                                <div>
                                    <div>배</div>
                                    <p>배개발</p>
                                </div>
                                <div>
                                    <p>2025.12.29</p>
                                </div>
                            </div>
                        </li>
                         <li>
                            <div>
                                <h4>React 18의 새로운 기능들</h4>
                                <p>뭐 새로운거 추가 됐다 한다</p>
                            </div>
                            <div css={s.boardBottomBox}>
                                <div>
                                    <div>배</div>
                                    <p>배개발</p>
                                </div>
                                <div>
                                    <p>2025.12.29</p>
                                </div>
                            </div>
                        </li>
                         <li>
                            <div>
                                <h4>React 18의 새로운 기능들</h4>
                                <p>뭐 새로운거 추가 됐다 한다</p>
                            </div>
                            <div css={s.boardBottomBox}>
                                <div>
                                    <div>배</div>
                                    <p>배개발</p>
                                </div>
                                <div>
                                    <p>2025.12.29</p>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default BoardListPage;
