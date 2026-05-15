export function getTypeStyle(callType, variant) {
  const styles = {
    answered: {
      card: "bg-green-100 border-green-400 text-green-700",
      text: "text-green-700",
    },
    missed: {
      card: "bg-red-100 border-red-400 text-red-700",
      text: "text-red-700",
    },
    voicemail: {
      card: "bg-yellow-100 border-yellow-400 text-yellow-700",
      text: "text-yellow-700",
    },
  };

  return styles[callType][variant];
}
