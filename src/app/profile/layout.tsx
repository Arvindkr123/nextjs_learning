import React from 'react'

const ProfileLayout = ({ children }: any) => {
    return (
        <div>
            This is profile header
            {children}
            This is profile footer
        </div>
    )
}

export default ProfileLayout
