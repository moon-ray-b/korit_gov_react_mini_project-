/** @jsxImportSource @emotion/react */
import { IoArrowBack } from "react-icons/io5";
import * as s from "./styles";
import React from "react";
import { useNavigate } from "react-router-dom";

function BoardDetailPage() {
    const navigate = useNavigate();
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <button onClick={() => navigate("/board/list")}>
                        <IoArrowBack />
                        목록으로
                    </button>
                </div>
                <div>
                    <div css={s.topBox}>
                        <h4>React 18의 새로운 기능들</h4>
                        <div css={s.boardBottomBox}>
                            <div>
                                <div>배</div>
                                <p>배개발</p>
                            </div>
                            <div>
                                <p>2024.12.29</p>
                            </div>
                        </div>
                    </div>
                    <div css={s.bottomBox}>
                        <p>뭐 그렇고 그런 이야기</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailPage;
