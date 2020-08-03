# Database Evaluation Task

Let's design an event registration system! 

This database is not bound to any particular technology (e.g. SQL or NoSQL), and we are looking for clarity in communication, ability to turn abstract concepts into practical steps, and systematic thinking.

## Here are the requirements
- Required fields for each event are: **event title, event date, event location** and **registration cost**. 
- We have registered members (you can access member id, name, email etc.), and only members are allowed to register.
- Event registrations can be cancelled and/or transferred to different events. 
- Members can pay fully or partially at the time of registration.

## Questions
1. As per the above provided requirements, define the minimal database structure which can satisfy the requirements. No queries are required, and what required tables and fields required?

<img src="https://i.ibb.co/LQ5gPrc/DBSuvera.png"/>

 
2. Define what steps required for event registration (i.e. database flow). Suppose you are already logged in and on registration page with option to select event from dropdown list, member information is available globally.

Step-1: A list of events is fetched from the EVENTS TABLE

Step-2: The user selects an EVENT and clicks on REGISTER BUTTON

Step-3: On clicking the REGISTER button a POST API is fired along with the MemberID (aka UserId) and the EventId.

Step-4: The EventId and the MemberID gets stored in a column in the EVENTREGISTRATION TABLE. There the status or now will be PAYMENT_PENDING

Step-5: User is sent to a payments page where he can either complete the payment now or can complete the payment later or can make partial payment.

Step-6: If the user pays complete payment (via any 3rd party provider) then for that MemberId and for that EventId the AmountPaid field in PAYMENTS TABLE will be updated to the full amount paid and the Amount Pending will be zero.
If the user pays partial payment (via ANY 3rd party provider) then for that MemberId and for that EventId the AmountPaid field in PAYMENTS TABLE  will be updated to the actual amount paid and the Amount Pending will be Total Amount - Amount Paid.

Step-7: The status in the EVENTREGISTRATION is changed to REGISTER_SUCCESS for full payments and PAY_PENDING for partial pay or no pay.

 
3. Describe the database flow for cancellation and/or refund?

Step-1: The user selects the event and clicks on the “Cancel” button. A POST API is called that sends the EventId and the MemberID to the backend.

Stepp-2: In the EVENTREGISTRATION TABLE the column corresponding to the EventId and the MemberId is updated and the status is changed from REGISTER_SUCCESS to REFUND_PENDING. 

Step-3 : The row corresponding to the MemberId and the EventID is selected on PAYMENTS TABLE and there the AmountPaid is refunded via the 3rd party payment service. Once the 3rd party payment service request is done, we need to update the column in PAYMENTS TABLE and make AmountRefunded to the value at AmountPaid field.

Step-4: Once the updates in the PAYMENTS TABLE are done, the EVENTREGISTRATION TABLE status corresponding to the EventId and MemberId is to be updated to REFUND_SUCCESS`


