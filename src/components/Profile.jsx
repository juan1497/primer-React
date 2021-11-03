import React from 'react'

const Profile=({profiles})=>{
    return(
        <>
            {profiles.map(profile=>{
                return(
                <div key={JSON.stringify(profile)}>
                    <p>{profile.name}</p>
                    <p>{profile.location}</p>
                    <img src={profile.image} width="200"/>
                </div>
                )
            })}
        </>
    )
}

export default Profile