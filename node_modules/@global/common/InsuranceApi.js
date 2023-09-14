export async function InsuranceApi() {
  const response = await fetch("http://localhost:8080/TALIC/getInsurances");
  return response.status === 200 ? response.data : [];
}
