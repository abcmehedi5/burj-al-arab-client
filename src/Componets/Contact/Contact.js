import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div class="container" className='contact'>
                <h2 class="text-center">Contac Form</h2>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-6 pb-5">

                        <form method="post">
                            <div class="card border-primary rounded-0">
                                <div class="card-header p-0">
                                    <div class="bg-info text-white text-center py-2">
                                        <h3><i class="fa fa-envelope"></i> Contact</h3>
                                        {/* <p class="m-0">Con gusto te ayudaremos</p> */}
                                    </div>
                                </div>
                                <div class="card-body p-3">


                                    <div class="form-group">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                            </div>
                                            <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                            </div>
                                            <input type="email" class="form-control" id="nombre" name="email" placeholder="Email" required />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                            </div>
                                            <textarea class="form-control" placeholder="Message" required></textarea>
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <input type="submit" value="Enviar" class="btn btn-info btn-block rounded-0 py-2" />
                                    </div>
                                </div>

                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;