
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import MPRITable from './MPRITable';

function MedicinePurchaseReturnInvoice(){
    const handleSubmit = (e) => {
        e.preventDefault();
        
      };

    return(
        <>
        <div className='container maindiv my-5'>
            <div id='mpo_info'><h2>Medicine Purchase Return Invoice</h2></div>
            <form className='container pb-5 form_div'>
                <div className=' row my-3 pt-5 pb-3'>
                    <div className='container col-sm-6 '>
                        <div className='col_div'>
                            <div className="row"> 
                                <div className=" formlabel col-sm-3">
                                    <label htmlFor="mpo_no" className="form-label" ><b>MPR INV No:</b></label>
                                </div>
                                <div className='col-sm-9'>
                                    <input type="text" id="mpo_no" className="form-control" required />
                                </div>
                            </div><br />  
                            <div className="row">
                                <div className=" formlabel col-sm-3">
                                    <label htmlFor="mp_inv_no" className="form-label" ><b>MP INV No:</b></label>
                                </div>
                                <div className='col-sm-9'>
                                    <input type="text" id="mp_inv_no" className="form-control" required />
                                </div>
                            </div><br />  
                            <div className="row">
                                <div className=" formlabel col-sm-3">
                                    <label htmlFor="mri_bill_no" className="form-label" ><b>Bill No/Invoice No:</b></label>
                                </div>
                                <div className='col-sm-9'>
                                    <input type="text" id="mri_bill_no" className="form-control" required />
                                </div>
                            </div><br />                         
                        </div>
                    </div>
                    
                    <div className='col-sm-6'>
                        <div className='col_div'>
                            <div className="row">
                                <div className=" formlabel col-sm-3">
                                    <label htmlFor="mri_date" className="form-label" ><b>Date:</b></label>
                                </div>
                                <div className='col-sm-9'>
                                    <input type="date" id="mri_date" className="form-control" required />
                                </div>
                            </div><br />
                            <div className="row">
                                <div className=" formlabel col-sm-3">
                                    <label htmlFor="mpo_no" className="form-label" ><b>MPO No:</b></label>
                                </div>
                                <div className='col-sm-9'>
                                    <input type="text" id="mpo_no" className="form-control" required />
                                </div>
                            </div><br />
                            <div className="row">
                                <div className=" formlabel col-sm-3">
                                    <label htmlFor="mri_bill_dt" className="form-label" ><b>Bill Date:</b></label>
                                </div>
                                <div className='col-sm-9'>
                                    <input type="date" id="mri_bill_dt" className="form-control" required />
                                </div>
                            </div><br />
                        </div>
                    </div>
                </div><br />
                <hr/><br/>
                <div className='container pb-5'>                    
                    <MPRITable />
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

export default MedicinePurchaseReturnInvoice;