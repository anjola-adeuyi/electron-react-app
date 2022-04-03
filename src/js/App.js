import React from "react";

export default function App () {
  return (
    <>
      <h1>Hello Electron from component App</h1>
      <button onClick={() => {
        electron.notificationApi.sendNotification('Hello from electron')
      }}>Notify me</button>
    </>
  )
}