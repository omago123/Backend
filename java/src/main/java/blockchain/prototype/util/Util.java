package blockchain.prototype.util;

import java.security.MessageDigest;

public class Util {

    // input이 들어오면 그에 맞는 해시 값을 구해주는 함수
    public static String getHash(String input){
        StringBuffer result = new StringBuffer();
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(input.getBytes());
            byte bytes[] = md.digest();
            for (int i = 0; i < bytes.length; i++) {
                result.append(
                        Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1)
                );
            }
        } catch (Exception e){
                e.printStackTrace();
        }
        return result.toString();
    }
}
