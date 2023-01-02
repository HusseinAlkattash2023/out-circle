import { useRef } from "react";

function Partner({ num, setPartnersInfo, partnersInfo , data , setData , formErrors}) {

  const ref1 = useRef();

  return (
    <div className="my-4">
      <h3
        className="my-2"
        style={{ color: "#fff", borderBottom: "2px solid #fff" }}
      >
        {" "}
        Information Partner({num + 1})
      </h3>
      <div className="my-3 input_">
        <input
          value={data.full_name}
          onChange={(e) => {
            setData({ ...data, full_name: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = { ...data, full_name: e.target.value };
            setPartnersInfo(partnersInfoList);
          }}
          type="text"
          placeholder="Partner's full name"
        /><br/>
        {formErrors.full_name && (<span className="error" style={{ color: "red" }}>{formErrors.full_name}</span>)}
      </div>
      <div className="my-3 input_">
        <input
          value={data.birthday}
          onChange={(e) => {
            setData({ ...data, birthday: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = { ...data, birthday: e.target.value };
            setPartnersInfo(partnersInfoList);
          }}
          className="input"
          ref={ref1}
          onFocus={() => (ref1.current.type = "date")}
          onBlur={() => (ref1.current.type = "text")}
          placeholder="Born date"
          type="text"
        />
      </div>
      <div className="my-3 input_">
        <input
          value={data.phone_number}
          onChange={(e) => {
            setData({ ...data, phone_number: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = { ...data, phone_number: e.target.value };
            setPartnersInfo(partnersInfoList);
          }}
          type="number"
          placeholder="Personal mobile number"
        />
      </div>
      <div className="my-3 input_">
        <input
          value={data.whatsapp_number}
          onChange={(e) => {
            setData({ ...data, whatsapp_number: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = {
              ...data,
              whatsapp_number: e.target.value,
            };
            setPartnersInfo(partnersInfoList);
          }}
          type="number"
          placeholder="Whatsapp number"
        />
      </div>
      <div className="my-3 input_">
        <input
          value={data.land_phone_extension}
          onChange={(e) => {
            setData({ ...data, land_phone_extension: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = {
              ...data,
              land_phone_extension: e.target.value,
            };
            setPartnersInfo(partnersInfoList);
          }}
          type="number"
          placeholder="Landline extention"
        />
      </div>
      <div className="my-3 input_">
        <input
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = { ...data, email: e.target.value };
            setPartnersInfo(partnersInfoList);
          }}
          type="email"
          placeholder="Personal email address"
        />
      </div>
      <div className="my-3 input_">
        <input
          value={data.rate}
          onChange={(e) => {
            setData({ ...data, participation_rate: e.target.value });
            const partnersInfoList = partnersInfo.map((data) => data);
            partnersInfoList[num] = { ...data, participation_rate: e.target.value };
            setPartnersInfo(partnersInfoList);
          }}
          type="number"
          placeholder="Participation rate"
        />
      </div>
    </div>
  );
}

export default Partner;
