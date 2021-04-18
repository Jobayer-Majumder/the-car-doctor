import React, { useEffect, useState } from 'react';
import ShowTestimonials from './ShowTestimonials';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/getReviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <section>
            <div className="container mb-5">
                <h2 className="text-secondary text-center mb-5">Testimonials</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        reviews.map(review => <ShowTestimonials key={review._id} review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;