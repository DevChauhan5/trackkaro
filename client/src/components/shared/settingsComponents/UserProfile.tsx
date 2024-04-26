import { fetchUserProfile } from "@/api/userRequests";
import formatDate from "@/lib/formatDate";
import { useQuery } from "@tanstack/react-query";

export default function UserProfile() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["user-profile"],
    queryFn: fetchUserProfile,
  });
  if (isPending)
    return (
      <p className="mt-6 text-teal-400 animate-ping">Fetching Profile...</p>
    );
  if (error)
    return <p className="mt-6 text-red-400">Error Fetching Profile...</p>;
  const joined = data?.data?.createdAt && formatDate(data.data.createdAt);
  return (
    <div className="mt-6">
      <h1 className="text-xl ">Your Profile:</h1>
      {/*user data*/}
      <div className="mt-4">
        {data.data ? (
          <div className="flex-col items-center gap-2">
            <p>
              <span className="font-semibold text-md text-gray-400">Name:</span>{" "}
              {data?.data?.username}
            </p>
            <p>
              <span className="font-semibold text-md text-gray-400">
                Email:
              </span>{" "}
              {data?.data?.email}
            </p>
            <p>
              <span className="font-semibold text-md text-gray-400">
                Member Since:
              </span>{" "}
              {joined}
            </p>
          </div>
        ) : (
          <p className="mt-6 text-red-400">Error Fetching Profile...</p>
        )}
      </div>
    </div>
  );
}
