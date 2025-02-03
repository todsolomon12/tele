import { useState } from "react";
import "./PostRequestComponent.css";

export default function PostRequestComponent() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendPostRequest = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/appgateway/consumer/appserver/consumer/v1/ethiopia/getCustomerMsisdn", {
        method: "POST",
        headers: {
          "Sign": "552ab0f25af76ccb707a31ff96ba839fa41269bb8f77db7ee837928ea28bbefb",
          "Timestamp": "1738409881287",
          "Authorization": "cxFf1bF4dD8HfBPp/MxdE8AkxtlmGET8HrFDSJzIhlvosKwZ/oSKWeKTwcyqJQ9VA5YaXnDcd1uJMnphlxDzHItVjI/bTpcV7r8Theaj0oOP1zdi3GXPpiSmLKWym0s3IHKiLLlj+bhUgpno4aDrTlGF/ddgzZYtT3C+YeIcVzyx16VRnMSebdNiNw5IfqwaLwALkmMglmymptOjN2lo+FV1lhgVbRWnKbfNCYqTNJoPU2XvIjg06LBhGjVGcApE8u7MY0Z0//PkLaHguHNPhQsyQ8rBRbJDglUP7iP1uk0VbfyKP7daHS3JiJMtukV4/NuT2dy9WpF4lM8y+AM72rLT688RmM12gsN1FHIs6iXccIPpVQlatH1Q6cxV2RlxqaJsBz5uo1lONUP70uKzZBOSHANvzLp2nF4lx4galLjNnSu3oeSAl8X340wkuQnFcx6yHmlW0PsArM+u9FhUlXXsYq8iOYNz2yKoE4QEeByB+5Tn69hECb4LteALD+w2hRaAEMGxfCJMFxOwnjqDA3tz3+4L6HEdj4VVsYH4XT3SlPTqDnU8QqI2ltc/SGWqO1zISQ2SkSMTnhMMR7+I9sf3Kh913QVRXzEySz5WloG17rIgRPVB8aiRiqzdO18pXBVSHmpBXZyILqtZtQhydGUKDLyNfFJ6DREw2JdWYbU=",
          "SignKeyVersion": "01",
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          language: "en",
          version: "1.2.4",
          deviceId: "9057082c9ac1ebe4",
          platform: "android",
          apkSign: "f7697c6633707cd741e11ae28236511b85f51fb6a1f41f4f8c6d1301f46ce0fb",
          messageId: "7184a057-97e3-46bb-9a30-8de2c68dc52f",
          timestamp: "1738409881287"
        })
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError("Failed to fetch data");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <button 
        onClick={sendPostRequest} 
        className="send-button"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send POST Request"}
      </button>
      {error && <p className="error-message">{error}</p>}
      {response && (
        <pre className="response-box">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}

