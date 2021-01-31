package com.naverblog.dawndevelopers.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public final class Encrypt {
    public static String from(String str) {
        String sha = "";
        try {
            MessageDigest sh = MessageDigest.getInstance("SHA-256");
            sh.update(str.getBytes());
            byte byteData[] = sh.digest();
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < byteData.length; i++) { sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1)); }
            sha = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            sha = null;
        }
        return sha;
    }

    private Encrypt() {}
}
