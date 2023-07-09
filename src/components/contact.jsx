import React from 'react'

export const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder="name here" />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" required placeholder="email here" />
                </div>

                <div>
                    <label>Message</label>
                    <input type="text" required placeholder="your query here ..." />
                </div>

                <button type='submit'>Send</button>

            </form>
        </main>
    </div>
  )
}