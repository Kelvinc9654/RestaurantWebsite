
"use client"

function UpperFooter() {
    return (
        <div className="bg-gray-100 py-12 px-5 flex flex-col items-center justify-around gap-5 md:flex-row md:px-20">
            {/* Location Image */}
            <div>
                <img src="./images/other/Location.png" alt="locatation"
                    className="w-full max-w-sm object-cover"
                />
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg md:p-10">
                <h1 className="text-center mb-6 text-2xl font-bold text-gray-900 md:text-left">
                    Have any questions?
                </h1>

                <form className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="font-medium text-gray-800">Name:</label>
                        <input type="text" name="name" required 
                                className="border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </div>
                  
                    <div className="flex flex-col">
                        <label className="font-medium text-gray-800">Email:</label>
                        <input type="email" name="email" required
                                className="border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label>Message:</label>
                        <textarea name="message" required
                                    className="border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </div>

                    <button type="submit"
                            className="bg-red-500 px-3 py-2 border rounded-lg border-gray-300 cursor-pointer hover:bg-red-600">
                        submit
                    </button>
                </form>
            </div>
        </div>
    )
}

function LowerFooter() {
    return (
        <div id="contact" className="flex flex-col justify-around gap-10 bg-gray-200 py-10 px-5 md:flex-row md:px-20"> 
            {/* Business Hours */}
            <div className="text-center md:text-left">
                <h1 className="font-bold text-2xl mb-5">Business Hours</h1>
                <h3>Monday - Friday | 8:30am - 11:00pm</h3>
                <h3>Saturday - Sunday | 8:30am - 10:30pm</h3>
            </div>

            {/* Social Media Links */}
            <div className="text-center md:text-right">
                <h1 className="font-bold mb-5">Follow Us</h1>
                <div className="flex justify-center md:justify-end gap-5">
                    <a href="https://www.facebook.com/" className="hover:text-red-500 font-medium hover:underline">
                        FaceBook
                    </a>
                    <a href="https://www.instagram.com/" className="hover:text-red-500 font-medium hover:underline">
                        Instagram
                    </a>
                    <a href="https://x.com/" className="hover:text-red-500 font-medium hover:underline">
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <div>
            <UpperFooter/>
            <LowerFooter/>
        </div>
    )
}