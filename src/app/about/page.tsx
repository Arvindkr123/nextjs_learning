import React from 'react'

async function takeTime() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000)
    })
}

async function AboutPage() {
    await takeTime();
    // throw new Error("this is manual error") 
    return (
        <div>
            This is about page
        </div>
    )
}

export default AboutPage
