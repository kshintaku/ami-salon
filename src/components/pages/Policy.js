import React from 'react'

const Policy = () => {
    return (
        <div className="container-landing">
            <div className="container-landing-header">
                <h1>Policies</h1>
            </div>
            <div className="container-policy">
                <h3>Cancellation Policy</h3>
                <p>My goal at Hair by Ami is to provide the best experience possible for all clients. Your appointment is important to me, and is reserved just for you.</p>
                <p>I respectfully request cancellations or rescheduling of any appointments be made at least 24 hours in advance, or the following charges may apply:</p>
                <ul>
                    <li><b>Cancellations made within 24 hours</b> of the appointment will result in a <b>50% charge</b> of the appointed service amount.</li>
                    <li><b>No shows</b> will result in a <b>100% charge</b> of the appointed service amount.</li>
                    <li>In the case where the appointment is made within the 24 hour period, you must cancel or reschedule the appointment 4 hours prior to the appointment. If not, it will result in a <b>50% charge</b> of the appointed service amount</li>
                </ul>
                <h3>COVID-19 Precautions</h3>
                <p>If you are experiencing any symptoms such as a fever, cough, sore throat, etc, please reschedule your appointment to when you are no longer symptomatic. Also, if you were recently present in a COVID-19 impacted area, I respectfully request that you reschedule your appointment 14 days after the date of contact.</p>
                <p><b>It will be a requirement for all clients to wear face coverings when you arrive for your appointment.</b></p>
            </div>
        </div>
    )
}

export default Policy
