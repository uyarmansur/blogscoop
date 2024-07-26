import Swal from "sweetalert2";



export const SuccessMessage = (text, confirmButtonText) => {
  return Swal.fire({
    title: "Success",
    text: text,
    icon: "success",
    confirmButtonText: confirmButtonText,
  });
};
export const ErrorMessage = (text, confirmButtonText) => {
  return Swal.fire({
    title: "Error",
    text: text,
    icon: "error",
    confirmButtonText: confirmButtonText,
  });
};
