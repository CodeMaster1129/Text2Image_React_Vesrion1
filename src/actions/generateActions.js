import axios from "axios";
import { useGenerateImageStore } from "../store";

export const useGenerateImageActions = () => {
    const { setGeneratedImages, setLoading } = useGenerateImageStore();

    const getAllGeneratedImages = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/generated_images/`);
            setGeneratedImages(res.data.images);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const generateImage = async (description, style, size, count) => {
        setLoading(true);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/generate_image/`, {
                description,
                style,
                size,
                count,
            });
            if (res.status === 200) {
                await getAllGeneratedImages();
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const deleteImage = async (id) => {
        setLoading(true);
        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/delete_image/`, {
                params: { id }
            });
            if (res.status === 200) {
                await getAllGeneratedImages();
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }
    return { getAllGeneratedImages, generateImage, deleteImage };
};
