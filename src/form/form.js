import '../App.css';
function Form(){
    return(
        <form className="service">

            <h1 className="headService">CONTACT</h1>
            <div className="formm">
                
            <label>EMAIL:</label>
            <input type="email" placeholder="Email..."/>
            <br/>
            <label>your message:</label>
            <br/>
            <textarea rows="10" cols="85"></textarea>
            <br/>
            <button>SEND</button>
            </div>
            
        </form>
    )
}
export default Form;