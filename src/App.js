import React from "react";

function App() {
  // Función para solicitar permiso de notificación
  const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
      alert("Las notificaciones no están disponibles en este navegador.");
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      alert("¡Permiso de notificaciones otorgado!");
    } else {
      alert("Permiso denegado o cerrado.");
    }
  };

  // Función para mostrar la notificación
  const showNotification = () => {
    if (Notification.permission === "granted") {
      const noti = new Notification("SUMADI NOTIFICATIONS", {
        body: "Your are not allowed to out focus your exam",
        icon: "https://www.svgrepo.com/show/13658/error.svg", // Asegúrate de agregar este ícono en la carpeta public
        image: "https://www.svgrepo.com/show/470286/warning-alt-2.svg",
      });

      noti.onclick = () => {
        window.focus()
      };
    } else {
      alert("Debes otorgar permiso para mostrar notificaciones.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React App con Notificaciones</h1>
      <button onClick={requestNotificationPermission}>
        Solicitar permiso
      </button>
      <button onClick={showNotification} style={{ marginLeft: "10px" }}>
        Mostrar notificación
      </button>
    </div>
  );
}

export default App;
