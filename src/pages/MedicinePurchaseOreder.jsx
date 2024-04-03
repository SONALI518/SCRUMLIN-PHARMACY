import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import Table from './table';

const isMPOValid = (mponame) => {
    const mpoPattern = /[MPO][-][01-99]/ ;
    return mpoPattern.test(mponame);
  } 

function MedicinePurchaseOrder(){
    
    const [mpoinputValue, setMPOInputValue] = useState('');
    const [error, setError] = useState('');
    
    
    const handleMPOInputChange = (e) => {
        const mpoinputvalue = e.target.value;
        setMPOInputValue(mpoinputvalue);

        if(!isMPOValid(mpoinputvalue)){
          setError('error')
        }
        else{
          setError('');
        }
        return false;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        
      };

    return(
        <>
        <div className=' container maindiv my-5'>
            <div id='mpo_info'><h2>Medicine Purchase Order</h2></div>
                <form className='container pb-5 form_div'>
                    <div className=' row my-3 pt-5 pb-3 '>
                        <div className='container col-sm-6 ml-3 pl-3'>
                            <div className='col_div'>
                                <div className="row  ">
                                    <div className=" formlabel col-sm-2">
                                        <label htmlFor="mpo_no" className="form-label" ><b>MPO No:</b></label>
                                    </div>
                                    <div className='col-sm-10'>
                                        <input 
                                            type="text" 
                                            id="mpo_no" 
                                            value={mpoinputValue}
                                            onChange={handleMPOInputChange} 
                                            className='form-control' required />
                                            {<p style={{ color: 'red' }}>{error}</p>}
                                    </div>
                                </div><br />                         
                            </div>
                        </div>
                        
                        <div className='col-sm-6'>
                            <div className='col_div'>
                            <div className="row  ">
                                    <div className=" formlabel col-sm-2 pl-5">
                                        <label htmlFor="mpo_no" className="form-label ml-5 mt-1" ><b>Date:</b></label>
                                    </div>
                                    <div className='col-sm-10'>
                                        <input type="date" id="mpo_no" className="form-control" required />
                                    </div>
                                </div><br />
                            </div>
                        </div>
                    </div><br />
                    <hr/><br/>                
                    <div className='container pb-5'>                        
                        <Table />
                    </div>                
                    <br /><br /> 
                    <div id='btn_sub'>
                        <button onSubmit={handleSubmit} className='btn btn-secondary' name='Submit'>Submit</button>
                    </div><br /><br /> 
                </form>             
            
        </div><br /><br /><br /><br />
        </>
    )
}

export default MedicinePurchaseOrder;