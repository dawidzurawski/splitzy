import { data } from "@/constants"; // Make sure this path is correct
import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import CustomButton from "./CustomButton";

interface UserCardProps {
  groupSavings: string;
  people: string;
  name: string;
  moneyIn: string;
  subtitle: string;
  title: string;
  titleDescription: string;
}

const UserCard: React.FC<UserCardProps> = ({
  groupSavings,
  people,
  name,
  moneyIn,
  subtitle,
  title,
  titleDescription,
}) => {
  return (
    <Card>
      <View className="flex-row justify-between mb-4">
        <Text className="font-semibold text-gray-800 mb-2">{title}</Text>
        <Text className="text-gray-600">{people}</Text>
      </View>
      <Text className="text-gray-600 mb-12">{titleDescription}</Text>
      <Text className="font-semibold text-gray-800 mb-4">{subtitle}</Text>
      <Text className="text-6xl font-bold mb-8">{groupSavings}</Text>

      {data.map((item) => (
        <View key={item.id} className="flex-row justify-between mb-4">
          <Text className="text-gray-600">{item.name}</Text>
          <Text className="text-gray-600">{item.moneyIn}</Text>
        </View>
      ))}

      <CustomButton title="Add money" />
    </Card>
  );
};

export default UserCard;
