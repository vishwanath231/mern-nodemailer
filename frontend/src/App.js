import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { postContact } from './redux/action/ContactAction';


const App = ({ contact, postContact }) => {

    const [fromEmail, setFromEmail] = useState('vishwanathvishwabai@gmail.com');
    const [toEmail, setToEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errMsg, setErrMsg] = useState('');

    

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!fromEmail) {
            setErrMsg('From mail required!')
        }else if (!toEmail){
            setErrMsg('To mail required!')
        }else if(fromEmail === toEmail){
            setErrMsg('From mail and To mail are equal')
        }else if (!subject){
            setErrMsg('Subject required!')
        }else if (!message){
            setErrMsg('Message required!')
        }else{

            const data = {
                fromEmail: fromEmail,
                toEmail: toEmail,
                subject: subject,
                message: message
            }

            postContact(data)
            console.log(data);

            setErrMsg('');
            setToEmail('');
            setSubject('');
            setMessage('');
        }
    }


    const { error, msg } = contact;


    return (
        <div className='container p-4 max-w-3xl mx-auto'>
            <h2 className='text-4xl font-light uppercase mb-4'>Contact</h2>
            {errMsg && <div className='bg-red-200 text-center p-3 rounded mb-3'>{errMsg}</div>}
            {error && <div className='bg-red-200 text-center p-3 rounded mb-3'>{error}</div>}
            {msg && <div className='bg-green-200 text-center p-3 rounded mb-3'>{msg}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="fromEmail" className="block mb-2 text-sm font-medium text-gray-900">Your Email 
                        <span className='text-red-500 text-base'>*</span>
                    </label>
                    <input 
                    type="email" 
                    id="fromEmail" 
                    name='fromEmail'
                    value={fromEmail}
                    placeholder="example@support.com"
                    disabled
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="toEmail" className="block mb-2 text-sm font-medium text-gray-900">To Email 
                        <span className='text-red-500 text-base'>*</span>
                    </label>
                    <input 
                    type="email" 
                    id="toEmail" 
                    name='toEmail'
                    value={toEmail}
                    onChange={e => setToEmail(e.target.value)}
                    placeholder="example@support.com" 
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject 
                        <span className='text-red-500 text-base'>*</span>
                    </label>
                    <input 
                    type="text" 
                    id="subject" 
                    name='subject'
                    value={subject}
                    onChange={e => setSubject(e.target.value)} 
                    placeholder="Enter subject" 
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Subject 
                        <span className='text-red-500 text-base'>*</span>
                    </label>
                    <textarea 
                        type="text" 
                        id="message" 
                        name='message'
                        value={message}
                        onChange={e => setMessage(e.target.value)} 
                        placeholder="Enter you message..."
                        className="resize-none h-28 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Send</button>
            </form>
        </div>
    )
}


const mapStateToProps = (state) => ({
    contact: state.contact
})

export default connect(mapStateToProps, { postContact })(App);