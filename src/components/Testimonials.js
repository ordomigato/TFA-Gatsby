import React from 'react'
import './Testimonials.scss'

function Testimonials() {
    const data = [
        {
            name: 'Bill',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            date: '01/01/2020'
        },
        {
            name: 'Bill',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            date: '01/01/2020'
        },
        {
            name: 'Bill',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing ud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            date: '01/01/2020'
        },
        
    ]

    return (
        <section id="testimonial-section">
            <div className="testimonial-wrapper">
                { data.map(testimonial => (
                    <article>
                        <p>
                            { testimonial.review }
                        </p>
                        <footer>
                            <span> { testimonial.name } - </span>
                            <time> { testimonial.date } </time>
                        </footer>
                    </article>
                ))}

            </div>
        </section>
    )
}

export default Testimonials
