// Utility for Error Handling
export const handleRequest = async (res, callback) => {
  try {
    const result = await callback();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
