function validOtp(otp) {
    if (typeof otp !== 'string') {
        return "Invalid";
    }

    return otp.length === 8 && otp.startsWith("ph-");
}