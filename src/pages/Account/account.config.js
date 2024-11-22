import * as ImagePicker from "expo-image-picker";

export const pickImage = async (setFoto) => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            aspect: [1, 1], // Menambahkan rasio 1:1
        });

        if (result.assets && result.assets.length > 0) {
            const uri = result.assets[0].uri;
            console.log("File gambar dipilih:", uri);
            setFoto(uri);
        } else {
            console.log("Pemilihan gambar dibatalkan.");
        }
    } catch (error) {
        console.log("Error saat memilih gambar:", error);
    }
};
