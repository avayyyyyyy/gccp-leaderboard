import React from "react";

function TableRow({ participant, index }) {
  return (
    <tr className=" border border-b-slate-200 odd:bg-white even:bg-gray-50">
      <td className="Student_Name p-3 uppercase">
        {index + 1}
        {". "}
        {participant["User Name"]}
        {participant["All 3 Pathways Completed - Yes or No"] == "Yes" ? "🏅" : ""}
      </td>

      <td className="Redemption_Status p-3 relative">
        <div
          className={`w-fit m-auto rounded-3xl px-4 py-1 text-center ${
            participant["Campaign Code Redemption Status"] == "Yes"
              ? "bg-green-200 text-green-600"
              : "bg-yellow-200 text-yellow-600"
          }`}
        >
          {participant["Campaign Code Redemption Status"] == "Yes" ? "Done" : "Not!"}
        </div>
      </td>

      <td className="Institution mob:hidden relative p-3">
        <div
          className={`m-auto w-fit rounded-3xl px-2 py-1 text-center ${
            participant["Profile URL Status"] == "All Good"
              ? "bg-green-200 text-green-600"
              : "bg-yellow-200 text-yellow-600"
          }`}
        >
          {participant["Profile URL Status"] == "All Good"
            ? "All Good"
            : "Not Good"}
        </div>
      </td>

      <td className="Completions_both_Pathways_relative p-3 text-center">
        <div
          className={`m-auto w-fit rounded-3xl px-5 py-1 text-center ${
            participant["All 3 Pathways Completed - Yes or No"] == "Yes"
              ? "bg-green-200 text-green-600"
              : "bg-yellow-200 text-yellow-600"
          }`}
        >
          {participant["All 3 Pathways Completed - Yes or No"] == "Yes"
            ? "Yes"
            : "No !"}
        </div>
      </td>

      <td className="no_Courses_Completed mob:hidden p-3 text-center">
        {participant["Prompt Design in Vertex AI Completion"]}
      </td>

      <td className="no_Skill_Badges_Completed mob:hidden p-3 text-center">
        {participant["Develop GenAI Apps with Gemini and Streamlit Completion"]}
      </td>

      <td className="GenAI_Game_Completed mob:hidden p-3 text-center">
        {participant["Gen AI Arcade Game Completion"]}
      </td>
    </tr>
  );
}

export default TableRow;
