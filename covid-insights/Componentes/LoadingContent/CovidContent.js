import React, { useState, useEffect } from "react";
import Axios from "axios";
import $ from 'jquery'

const fetchData = async (setList) => {
    try {
        const response = await Axios({
            url: "https://api.covid19api.com/summary",
        });

        setList(response.data.Countries);
    } catch (error) {
        console.log(error);
    }
};




import styles from './css/CovidContent.module.css'

/* this component shows the information about*/
const CovidContent = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData(setList);

        
    }, [setList]);

    return (
        <div>
            <div className={styles.MixTableContainer}>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">CountryCode</th>
                            <th scope="col">NewConfirmed</th>
                            <th scope="col">TotalConfirmed</th>
                            <th scope="col">NewDeaths</th>
                            <th scope="col">TotalDeaths</th>
                            <th scope="col">NewRecovered</th>
                            <th scope="col">TotalRecovered</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {list.map((item) => (
                            <tr>
                                <td>{item.Country}</td>
                                <td>{item.CountryCode}</td>
                                <td>{item.NewConfirmed}</td>
                                <td>{item.TotalConfirmed}</td>
                                <td>{item.NewDeaths}</td>
                                <td>{item.TotalDeaths}</td>
                                <td>{item.NewRecovered}</td>
                                <td>{item.TotalRecovered}</td>
                                <td>{item.Date}</td>                        

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CovidContent;