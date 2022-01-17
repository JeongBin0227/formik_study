import { useState } from 'react';
import styled from 'styled-components';

// function validateForm() {
//   setAlertMessage(ALERT_MESSAGE.EMPTY_STRING);

//   if (!validateOwnerInfo() || (!isOwnerManagerSame && !validateManagerInfo())) {
//     return;
//   }

//   if (!isAgreementsChecked) {
//     setAlertMessage(ALERT_MESSAGE.CHECK_AGREEMENTS);

//     return;
//   }

//   return true;
// }

// function requestPaymentData() {
//   return requestDomainPaymentData({
//     item: {
//       address: domain,
//       period,
//       listPrice: PRICE,
//     },
//     owner: {
//       type: isOwnerTypeIndividual ? 'INDIVIDUAL' : ctfyCodes[registrationCertificateType],
//       certificateNumber: !isOwnerTypeIndividual ? registrationCertificate : null,
//       organizationName: !isOwnerTypeIndividual ? institutionKoreanName : null,
//       engOrganizationName: !isOwnerTypeIndividual ? institutionEnglishName : null,
//       name: ownerKoreanName,
//       engName: ownerEnglishName,
//       zipcode: ownerAddress.zipCode,
//       addr1: ownerAddress.roadAddress,
//       addr2: ownerAddress.additionalAddress,
//       engAddr1: ownerAddress.roadAddressEnglish,
//       city: 'Korea',
//       country: 'KR',
//       phone: `${ownerPhoneNumber.head}${ownerPhoneNumber.middle}${ownerPhoneNumber.tail}`,
//       email: ownerEmail,
//     },
//     manager: {
//       name: isOwnerManagerSame ? ownerKoreanName : managerKoreanName,
//       engName: isOwnerManagerSame ? ownerEnglishName : managerEnglishName,
//       zipcode: isOwnerManagerSame ? ownerAddress.zipCode : managerAddress.zipCode,
//       addr1: isOwnerManagerSame ? ownerAddress.roadAddress : managerAddress.roadAddress,
//       addr2: isOwnerManagerSame ? ownerAddress.additionalAddress : managerAddress.additionalAddress,
//       engAddr1: isOwnerManagerSame
//         ? ownerAddress.roadAddressEnglish
//         : managerAddress.roadAddressEnglish,
//       city: 'Korea',
//       country: 'KR',
//       phone: isOwnerManagerSame
//         ? `${ownerPhoneNumber.head}${ownerPhoneNumber.middle}${ownerPhoneNumber.tail}`
//         : `${managerPhoneNumber.head}${managerPhoneNumber.middle}${managerPhoneNumber.tail}`,
//       email: isOwnerManagerSame ? ownerEmail : managerEmail,
//     },
//   });
// }

function FormNotFormik() {
  //   async function handlePayClick() {
  //     if (preRequest) {
  //       const preRequestRes = preRequest();

  //       if (!preRequestRes) return;
  //     }

  //     const paymentData = await fetchPaymentData();
  //     const { id, title, orderer, price } = paymentData;

  //     tossPayments.requestPayment('카드', {
  //       amount: price,
  //       orderId: id,
  //       orderName: title,
  //       customerName: orderer,
  //       successUrl,
  //       failUrl,
  //     });
  //   }

  //   const { preRequest, fetchPaymentData, successUrl, failUrl } = props;
  const [대표자, 대표자설정] = useState('');
  const [생년월일, 생년월일설정] = useState('');
  const [상호, 상호설정] = useState('');
  const [사이트주소, 사이트주소설정] = useState('');
  const [사업자유형, 사업자유형설정] = useState('');
  const [이메일, 이메일설정] = useState('');

  const handle대표자Change = (event) => {
    대표자설정(event.target.value);
  };

  const handle생년월일Change = (event) => {
    생년월일설정(event.target.value);
  };

  const handle상호Change = (event) => {
    상호설정(event.target.value);
  };

  const handle사이트주소Change = (event) => {
    사이트주소설정(event.target.value);
  };

  const handle이메일Change = (event) => {
    이메일설정(event.target.value);
  };

  const handle사업자유형설정Change = (event) => {
    사업자유형설정(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };
  return (
    <>
      <h1>토스 페이먼츠 신청</h1>
      <form>
        <div>
          <label>대표자</label>
          <input value={대표자} onChange={handle대표자Change} />
        </div>
        <div>
          <label>대표자 생년월일 6자리</label>
          <input value={생년월일} onChange={handle생년월일Change} />
        </div>
        <div>
          <label>상호</label>
          <input value={상호} onChange={handle상호Change} />
        </div>
        <div>
          <label>사이트 주소</label>
          <input value={사이트주소} onChange={handle사이트주소Change} />
        </div>
        <div>
          <label>사업자유형</label>
          <input type='radio' value={사업자유형} />
        </div>
        <div>
          <label>사업자등록번호</label>
          <input type='radio' value={사업자유형} />
        </div>
        <div>
          <label>전화번호</label>
          <input type='radio' value={사업자유형} />
        </div>
        <div>
          <label>이메일</label>
          <input value={이메일} onChange={handle이메일Change} />
        </div>
        <button onClick={handleSubmit}>결제하기</button>
      </form>
    </>
  );
}

export default FormNotFormik;
