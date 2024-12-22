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
import { getData, putData } from "@services/apiClient";
import { useParams, useNavigate } from "react-router-dom";

const usedCarSchema = z.object({
  city: z.string().min(2, "City is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile must be 10 digits"),
  price: z.number().min(1, "Price must be greater than zero"),
  brand: z.enum(["Toyota", "Honda", "Ford", "BMW", "Other"]),
  carName: z.string().min(2, "Car Name is required"),
  year: z.number().min(2000).max(new Date().getFullYear(), "Invalid year"),
  month: z.enum([
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
  ]),
  ownerType: z.enum(["First", "Second", "Third"]),
  kmDriven: z.number().min(0, "Kilometers driven must be non-negative"),
  comments: z.string().optional(),
});

const UsedCarEditForm = () => {
  const carId = useParams().carId;
  const navigate = useNavigate();
  const [pictureFile, setPictureFile] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const authStore = useSelector((state) => state.entities.auth);
  const userId = authStore.user._id;
  const username = authStore.user.username;

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(usedCarSchema),
    defaultValues: {
      brand: "Toyota",
      year: new Date().getFullYear(),
      month: "January",
      ownerType: "First",
    },
  });

  // Fetch existing data
  useEffect(() => {
    if (carId) {
      (async () => {
        try {
          const data = await getData(`/usedcars/details/${carId}`);
          Object.keys(data).forEach((key) => setValue(key, data[key]));
        } catch (error) {
          console.error("Failed to load data for editing:", error);
        }
      })();
    }
  }, [carId, setValue]);

  const preprocessData = (data) => ({
    ...data,
    price: Number(data.price),
    year: Number(data.year),
    kmDriven: Number(data.kmDriven),
  });
  const [isUploading, setIsUploading] = useState(false);

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
    setIsUploading(true);

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", import.meta.env.VITE_APP_UPLOAD_PRESET);
      formData.append("folder", "carwale/usedCars");

      try {
        const response = await fetch(import.meta.env.VITE_APP_CLOUDINARY_URL, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();

        setValue("picture", {
          name: file.name,
          url: result.secure_url,
          pictureId: result.public_id,
        });
      } catch (error) {
        toast({
          title: "Image upload failed",
          description: "Please try again.",
          status: "error",
          duration: 2500,
        });
      } finally {
        setIsUploading(false);
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const processedData = preprocessData(data);
      processedData.userId = userId;
      processedData.name = username;

      const response = await putData(`/usedcars/edit/${carId}`, processedData);

      if (response.success) {
        toast({
          title: "Used car data updated successfully!",
          status: "success",
          duration: 2500,
        });
        reset();
        navigate(`/manage-your-listings/${userId}`);
      } else {
        throw new Error(
          response.message || "Used car data update failed. Please try again."
        );
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 2500,
      });
    } finally {
      setIsSubmitting(false);
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
            <Input type="email" {...register("email")} />
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
              {...register("price")}
              onChange={(e) => setValue("price", Number(e.target.value))}
            />
            <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
          </FormControl>

          {/* Brand */}
          <FormControl isInvalid={!!errors.brand}>
            <FormLabel>Brand</FormLabel>
            <Select {...register("brand")}>
              {["Toyota", "Honda", "Ford", "BMW", "Other"].map((brand) => (
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
            <Select
              {...register("year")}
              onChange={(e) => setValue("year", Number(e.target.value))}
            >
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
            <Input
              type="number"
              {...register("kmDriven")}
              onChange={(e) => setValue("kmDriven", Number(e.target.value))}
            />
            <FormErrorMessage>{errors.kmDriven?.message}</FormErrorMessage>
          </FormControl>

          {/* Picture */}
          <FormControl isInvalid={!!errors.picture}>
            <FormLabel>Picture</FormLabel>
            <Input type="file" onChange={handlePictureChange} />
            <FormErrorMessage>{errors.picture?.message}</FormErrorMessage>
          </FormControl>

          {/* Comments */}
          <FormControl>
            <FormLabel>Comments</FormLabel>
            <Textarea {...register("comments")} />
          </FormControl>

          {/* Submit Button */}
          <Button colorScheme="blue" type="submit" isDisabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update"}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default UsedCarEditForm;
