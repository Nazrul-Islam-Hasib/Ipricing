const SubscriptionForm = () => {
    return (
        <div className="hero my-16">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl lg:text-5xl font-bold text-info">Lets Get Started</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-info">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SubscriptionForm;