import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getData, putData, postData, deleteData } from "@services/apiClient";
import { useParams, useNavigate } from "react-router-dom";
import {
  BRANDS,
  MONTHS,
  OWNER_TYPES,
  CURRENT_YEAR,
  START_YEAR,
} from "@constants/constants";

const createSchema = (carId) =>
  z.object({
    city: z.string().min(2, "City is required"),
    email: z.string().email("Invalid email address"),
    mobile: z.string().regex(/^\d{10}$/, "Mobile must be 10 digits"),
    price: z.coerce.number().min(1, "Price must be greater than zero"),
    brand: z.enum(BRANDS),
    carName: z.string().min(2, "Car Name is required"),
    year: z.coerce.number().min(START_YEAR).max(CURRENT_YEAR, "Invalid year"),
    month: z.enum(MONTHS),
    ownerType: z.enum(OWNER_TYPES),
    kmDriven: z.coerce
      .number()
      .min(0, "Kilometers driven must be non-negative"),
    picture: carId
      ? z.object({
          name: z.string(),
          url: z.string().url("Invalid picture URL"),
          pictureId: z.string().min(1, "Picture ID is required"),
        })
      : z.object({
          name: z.string(),
          url: z.string().url("Invalid picture URL"),
          pictureId: z.string().min(1, "Picture ID is required"),
        }),
    comments: z.string().optional(),
  });

const UsedCarForm = () => {
  const carId = useParams().carId;
  const navigate = useNavigate();
  const [pictureFile, setPictureFile] = useState({});
  const [pictureName, setPictureName] = useState(""); // Track the picture name
  const [pictureId, setPictureId] = useState(""); // Track the picture Id
  const toast = useToast();
  const authStore = useSelector((state) => state.entities.auth);
  const userId = authStore.user._id;
  const username = authStore.user.username;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
    reset,
    clearErrors,
  } = useForm({
    resolver: zodResolver(createSchema(carId)),
    defaultValues: {
      brand: "Toyota",
      year: new Date().getFullYear(),
      month: "January",
      ownerType: "First",
    },
  });

  // Fetch existing data if carId is present
  useEffect(() => {
    if (carId) {
      (async () => {
        try {
          const data = await getData(`/usedcars/details/${carId}`);
          Object.keys(data).forEach((key) => setValue(key, data[key]));
          setPictureId(data.picture.pictureId);
          // console.log(data.picture.pictureId);
          if (data.picture?.name) {
            setPictureName(data.picture.name); // Set the file name
          }
        } catch (error) {
          console.error("Failed to load data for editing:", error);
        }
      })();
    } else {
      reset();
    }
  }, [carId, setValue]);

  console.log(pictureId);

  const [imageIsUploading, setImageIsUploading] = useState(false);

  const handlePictureChange = async (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        status: "error",
        duration: 2500,
      });
      return;
    }
    setPictureFile(file);
    setImageIsUploading(true);

    if (pictureId) {
      function encodePictureId(originalId) {
        if (typeof pictureId !== "string") {
          throw new Error("Input must be a string");
        }
        return originalId.replace(/\//g, "%2F");
      }

      const encodedId = encodePictureId(pictureId);
      console.log(encodedId);
      try {
        // Use Delete method to delete the existing image
        const response = await deleteData(`/usedcars/deleteimage/${encodedId}`);

        if (response) {
          // Handle success
          console.log("Image deleted successfully");
        } else {
          // Handle failure
          console.error("Failed to delete the image:", response.status);
          toast({
            title: "Error deleting image",
            description: "An error occurred while deleting the existing image.",
            status: "error",
            duration: 2500,
          });
          return;
        }
      } catch (error) {
        console.error("Failed to delete the existing image:", error);
        toast({
          title: "Error deleting image",
          description: "An error occurred while deleting the existing image.",
          status: "error",
          duration: 2500,
        });
        return;
      }
    }

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", import.meta.env.VITE_APP_UPLOAD_PRESET);
      formData.append("folder", "carwale/usedCars");

      try {
        const result = await postData(
          import.meta.env.VITE_APP_CLOUDINARY_URL,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Cloudinary upload result:", result);

        setValue("picture", {
          name: file.name,
          url: result.secure_url,
          pictureId: result.public_id,
        });
        clearErrors("picture");
      } catch (error) {
        toast({
          title: "Image upload failed",
          description: "Please try again.",
          status: "error",
          duration: 2500,
        });
      } finally {
        setImageIsUploading(false);
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      data.userId = userId;
      data.name = username;

      if (carId) {
        const response = await putData(`/usedcars/edit/${carId}`, data);

        if (response.success) {
          toast({
            title: "Used car data updated successfully!",
            status: "success",
            duration: 2500,
          });
          navigate(`/manage-your-listings/${userId}`);
          reset();
        } else {
          throw new Error(
            response.message || "Used car data update failed. Please try again."
          );
        }
      } else {
        const response = await postData(`/usedcars/upload`, data);
        console.log(response);
        if (response.success) {
          toast({
            title: "Used car data upload successful!",
            status: "success",
            duration: 2500,
          });
          navigate(`/manage-your-listings/${userId}`);
          reset();
        } else {
          setError(
            response.message || "Used car upload data failed. Please try again."
          );
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 2500,
      });
    }
  };

  return (
    <Box
      maxWidth="500px"
      mx="auto"
      mt={5}
      p={5}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align="stretch">
          {/* City */}
          <FormControl isInvalid={!!errors.city}>
            <FormLabel>City</FormLabel>
            <Input {...register("city")} />
            <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
          </FormControl>

          {/* Email */}
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="text" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          {/* Mobile */}
          <FormControl isInvalid={!!errors.mobile}>
            <FormLabel>Mobile</FormLabel>
            <Input {...register("mobile")} />
            <FormErrorMessage>{errors.mobile?.message}</FormErrorMessage>
          </FormControl>

          {/* Price */}
          <FormControl isInvalid={!!errors.price}>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              {...register("price", { valueAsNumber: true })}
            />
            <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
          </FormControl>

          {/* Brand */}
          <FormControl isInvalid={!!errors.brand}>
            <FormLabel>Brand</FormLabel>
            <Select {...register("brand")}>
              {BRANDS.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.brand?.message}</FormErrorMessage>
          </FormControl>

          {/* Car Name */}
          <FormControl isInvalid={!!errors.carName}>
            <FormLabel>Car Name</FormLabel>
            <Input {...register("carName")} />
            <FormErrorMessage>{errors.carName?.message}</FormErrorMessage>
          </FormControl>

          {/* Year */}
          <FormControl isInvalid={!!errors.year}>
            <FormLabel>Year</FormLabel>
            <Select {...register("year")}>
              {Array.from(
                { length: new Date().getFullYear() - 1999 },
                (_, i) => (
                  <option key={2000 + i} value={2000 + i}>
                    {2000 + i}
                  </option>
                )
              )}
            </Select>
            <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
          </FormControl>

          {/* Month */}
          <FormControl isInvalid={!!errors.month}>
            <FormLabel>Month</FormLabel>
            <Select {...register("month")}>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.month?.message}</FormErrorMessage>
          </FormControl>

          {/* Owner Type */}
          <FormControl isInvalid={!!errors.ownerType}>
            <FormLabel>Owner Type</FormLabel>
            <RadioGroup defaultValue="First">
              <VStack align="start">
                {["First", "Second", "Third"].map((type) => (
                  <Radio key={type} value={type} {...register("ownerType")}>
                    {type}
                  </Radio>
                ))}
              </VStack>
            </RadioGroup>
            <FormErrorMessage>{errors.ownerType?.message}</FormErrorMessage>
          </FormControl>

          {/* Kilometers Driven */}
          <FormControl isInvalid={!!errors.kmDriven}>
            <FormLabel>Kilometers Driven</FormLabel>
            <Input type="number" {...register("kmDriven")} />
            <FormErrorMessage>{errors.kmDriven?.message}</FormErrorMessage>
          </FormControl>

          {/* Picture */}
          <FormControl isInvalid={!!errors.picture}>
            <FormLabel>Picture</FormLabel>
            <Input type="file" onChange={handlePictureChange} />
            {pictureName && (
              <Box mt={2} color="gray.500" fontSize="sm">
                Uploaded file: {pictureName}
              </Box>
            )}
            <FormErrorMessage>{errors.picture?.message}</FormErrorMessage>
          </FormControl>

          {/* Comments */}
          <FormControl>
            <FormLabel>Comments</FormLabel>
            <Textarea {...register("comments")} />
          </FormControl>

          {/* Submit Button */}
          <Button
            colorScheme="blue"
            type="submit"
            isDisabled={imageIsUploading || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default UsedCarForm;
