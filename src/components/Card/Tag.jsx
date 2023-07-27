import { useState } from "react"
import { useEffect } from "react";
import "../../components/Card/Tag.css"

export default function Tag() {

    return(
        <>
        <div className="box-information">
            <div className="tag-information">
                <p>Status:</p>
            </div>
            <div className="tag-information">
                <p>Species:</p>
            </div>
        </div>
        <div className="tag-information-footer">
            <p>Gender:</p>
        </div>
        </>
    )
}