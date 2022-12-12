import React from "react";
import styles from "../styles/form.module.scss";

export default function Form() {
    return (

        <div className={styles.form}>

            <div style={{ backgroundColor: "aqua", padding: '1rem' }}>
                <div>

                    <p>
                        <input placeholder="first name" />
                    </p>
                    <p>
                        <input placeholder="last name" />
                    </p>



                    <div >

                        <div >
                            <p>
                                <textarea placeholder="address" />
                            </p>

                        </div>
                        <div>
                            <p>
                                <input type="text" placeholder="phone number" />
                            </p>
                            <p>
                                <input type="email" placeholder="enter your email" />
                            </p>
                            <p>
                                <input type="date" placeholder="" />
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <input type="text" placeholder="About You" style={{ height: "5rem" }} />
                </div>
                <div>
                    <input type="text" placeholder="Professional Summary"  />
                </div>
            </div>

            <div>
                <p style={{ border: "2px solid black", width: "10rem", height: "10rem" }}>

                </p>
                <p style={{ borderBottom: "2px solid black", marginTop: "1rem" }} >

                </p>
                <div>
                    <input type="text" placeholder="Skills" style={{ border: "2px solid black", height: "10vh" }} />

                </div>
                <p style={{ borderBottom: "2px solid black", marginTop: "1rem" }} >

                </p>

                <div>
                    <input type="text" placeholder="Language" style={{ border: "2px solid black", height: "10vh" }} />
                </div>
                <p style={{ borderBottom: "2px solid black", marginTop: "1rem" }} >

                </p>
                <div>
                    <input type="text" placeholder="Employment History" style={{ height: "5rem" }} />
                </div>
                <p style={{ borderBottom: "2px solid black", marginTop: "1rem" }} >

                </p>

                <div>
                    <input type="text" placeholder="Website links" />
                </div>
                <p style={{ borderBottom: "2px solid black", marginTop: "1rem" }} >

                </p>
                <div>
                    <input type="text" placeholder="References" />
                </div>

            </div>

        </div>
    )
}