"use client";
import {
  AdjustmentsHorizontalIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import { DashboardButton } from "./components/dashboard-button";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
export interface Assessor {
  name: string;
  presentation: {
    teamwork: number | null;
    customer_focus: number | null;
    analytical_thinking: number | null;
    commercial_acumen: number | null;
  };
  group_presentation: {
    customer_focus: number | null;
    problem_solving: number | null;
  };
}

export default function Home() {
  const exercises = [
    { name: "Presentation", score: 0.98, totalScore: 20 },
    { name: "Group Presentation", score: 1.6, totalScore: 15 },
    { name: "Interview of somesort", score: 1.5, totalScore: 28 },
    {
      name: "Written Exercise / Preperation Work",
      score: 1.17,
      totalScore: 15,
    },
    { name: "Funky Interview", score: 2, totalScore: 4 },
    { name: "Strengths-Based Interview", score: 0, totalScore: 100 },
    { name: "In Tray VS", score: 0, totalScore: 5 },
    { name: "Data Science Test", score: 0, totalScore: 290 },
    { name: "UI Test Exercise 123", score: 0, totalScore: 5 },
    { name: "Question ordering test", score: 7, totalScore: 10 },
    { name: "Case-Study Written Exercise", score: 0, totalScore: 5 },
    { name: "Written Exercise Dec 23", score: 0, totalScore: 15 },
    {
      name: "Fresh Exercise - Non-Sequential Scoring",
      score: 64.05,
      totalScore: 125,
    },
  ];

  const assessors = [
    {
      name: "Charlotte Hek",
      presentation: {
        teamwork: 1.7,
        customer_focus: 0,
        analytical_thinking: 0,
        commercial_acumen: 0,
      },
      group_presentation: {
        customer_focus: null,
        problem_solving: null,
      },
    },
    {
      name: "Lewis Whitehead",
      presentation: {
        teamwork: 4,
        customer_focus: 4,
        analytical_thinking: 3,
        commercial_acumen: 3,
      },
      group_presentation: {
        customer_focus: 1,
        problem_solving: 2,
      },
    },
    {
      name: "Saeed Assessor",
      presentation: {
        teamwork: 0,
        customer_focus: 0,
        analytical_thinking: 0,
        commercial_acumen: 0,
      },
      group_presentation: {
        customer_focus: null,
        problem_solving: null,
      },
    },
    {
      name: "Tammy Ross",
      presentation: {
        teamwork: 0,
        customer_focus: 0,
        analytical_thinking: 0,
        commercial_acumen: 0,
      },
      group_presentation: {
        customer_focus: null,
        problem_solving: null,
      },
    },
    {
      name: "Samantha Lee",
      presentation: {
        teamwork: 0,
        customer_focus: 0,
        analytical_thinking: 0,
        commercial_acumen: 0,
      },
      group_presentation: {
        customer_focus: 0,
        problem_solving: 0,
      },
    },
    {
      name: "Sophie Thomas",
      presentation: {
        teamwork: 0,
        customer_focus: 0,
        analytical_thinking: 0,
        commercial_acumen: 0,
      },
      group_presentation: {
        customer_focus: 0,
        problem_solving: 0,
      },
    },
  ];

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  return (
    <div className="container p-4 mx-auto my-12 bg-white border rounded-md shadow-md">
      <section className="pb-4">
        <h2 className="mb-4 text-xl font-extrabold text-blue-900 md:text-3xl">
          Campaign Dashboard
        </h2>
        <div className="grid items-end grid-cols-3 gap-2">
          <div>
            <label
              htmlFor="campaign"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Campaign:
            </label>
            <select
              id="campaign"
              className="bg-gray-50 border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 w-full block p-2.5 focus:outline-none focus:bg-white">
              <option defaultValue={"BP Test Campaign"}>
                BP Test Campaign
              </option>
              <option value={"Test Campaign 2"}>Test Campaign 2</option>
              <option value={"Test Campaign 3"}>Test Campaign 3</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Dates:
            </label>
            <div className="block w-full text-sm text-gray-900 border-2 rounded-lg bg-gray-50 focus:ring-blue-900 focus:border-blue-900 focus:outline-none">
              <Datepicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </div>
          </div>
          <div className="relative">
            <input type="search" className="bg-gray-50 border-2 appearance-none text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 focus:bg-white w-full block p-2.5 focus:outline-none" placeholder="Search..." />
            <button className="absolute top-0 right-0 h-full pr-2 text-red-600">
              <MagnifyingGlassIcon className="size-6" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 py-4 md:grid-cols-4">
          <DashboardButton
            icon={
              <UsersIcon className="block mx-auto mb-2 text-blue-900 size-16" />
            }
            number={16}
            title={"Candidates"}
          />
          <DashboardButton
            icon={
              <ChatBubbleLeftRightIcon className="block mx-auto mb-2 text-blue-900 size-16" />
            }
            number={16}
            title={"Assessors"}
          />
          <DashboardButton
            icon={
              <AdjustmentsHorizontalIcon className="block mx-auto mb-2 text-blue-900 size-16" />
            }
            number={94}
            title={"Pending Excercise"}
          />
          <DashboardButton
            icon={
              <CheckBadgeIcon className="block mx-auto mb-2 text-blue-900 size-16" />
            }
            number={11}
            title={"Completed Excercise"}
          />
        </div>
      </section>
      <section className="pb-4">
        <h2 className="mb-4 text-xl font-extrabold text-blue-900 md:text-3xl">
          Excercise averages across all candidates
        </h2>
        {exercises.map((exercise) => (
          <div
            key={exercise.name}
            className="relative block p-2 mb-2 font-semibold border rounded-md bg-gray-50">
            <div className="relative z-10 flex justify-between">
              {exercise.name}
              <span>
                {exercise.score} / {exercise.totalScore}
              </span>
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full bg-blue-100 rounded-sm"
              style={{
                width: `${(exercise.score / exercise.totalScore) * 100}%`,
              }}></div>
          </div>
        ))}
      </section>
      <section className="pb-4">
        <h2 className="mb-4 text-xl font-extrabold text-blue-900 md:text-3xl">
          Assessor Averages
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 shadow-md">
            <thead>
              <tr className="text-white bg-blue-900">
                <th className="p-2 text-sm md:text-base">Assessor Name</th>
                <th className="p-2 text-sm md:text-base">Teamwork (5)</th>
                <th className="p-2 text-sm md:text-base">Customer Focus (5)</th>
                <th className="p-2 text-sm md:text-base">
                  Analytical Thinking (5)
                </th>
                <th className="p-2 text-sm md:text-base">
                  Commercial Acumen (5)
                </th>
                <th className="p-2 text-sm md:text-base">
                  Customer Focus (Group) (5)
                </th>
                <th className="p-2 text-sm md:text-base">
                  Problem Solving (5)
                </th>
              </tr>
            </thead>
            <tbody>
              {assessors.map((assessor: Assessor, index) => (
                <tr
                  key={index}
                  className="font-semibold text-center border-gray-300 odd:bg-white even:bg-gray-100">
                  <td className="p-2 text-sm font-semibold md:text-base">
                    {assessor.name}
                  </td>
                  <td
                    className={`p-2 border-l text-sm md:text-base ${
                      assessor.presentation.teamwork !== null &&
                      assessor.presentation.teamwork >= 2 &&
                      assessor.presentation.teamwork <= 3
                        ? "text-yellow-600"
                        : assessor.presentation.teamwork !== null &&
                          assessor.presentation.teamwork > 3
                        ? "text-green-600"
                        : "text-red-600"
                    }`}>
                    {assessor.presentation.teamwork ?? "-"}
                  </td>
                  <td
                    className={`p-2 border-l text-sm md:text-base ${
                      assessor.presentation.customer_focus !== null &&
                      assessor.presentation.customer_focus >= 2 &&
                      assessor.presentation.customer_focus <= 3
                        ? "text-yellow-600"
                        : assessor.presentation.customer_focus !== null &&
                          assessor.presentation.customer_focus > 3
                        ? "text-green-600"
                        : "text-red-600"
                    }`}>
                    {assessor.presentation.customer_focus ?? "-"}
                  </td>
                  <td
                    className={`p-2 border-l text-sm md:text-base ${
                      assessor.presentation.analytical_thinking !== null &&
                      assessor.presentation.analytical_thinking >= 2 &&
                      assessor.presentation.analytical_thinking <= 3
                        ? "text-yellow-600"
                        : assessor.presentation.analytical_thinking !== null &&
                          assessor.presentation.analytical_thinking > 3
                        ? "text-green-600"
                        : "text-red-600"
                    }`}>
                    {assessor.presentation.analytical_thinking ?? "-"}
                  </td>
                  <td
                    className={`p-2 border-l text-sm md:text-base ${
                      assessor.presentation.commercial_acumen !== null &&
                      assessor.presentation.commercial_acumen >= 2 &&
                      assessor.presentation.commercial_acumen <= 3
                        ? "text-yellow-600"
                        : assessor.presentation.commercial_acumen !== null &&
                          assessor.presentation.commercial_acumen > 3
                        ? "text-green-600"
                        : "text-red-600"
                    }`}>
                    {assessor.presentation.commercial_acumen ?? "-"}
                  </td>
                  <td
                    className={`p-2 border-l text-sm md:text-base ${
                      assessor.group_presentation.customer_focus !== null &&
                      assessor.group_presentation.customer_focus >= 2 &&
                      assessor.group_presentation.customer_focus <= 3
                        ? "text-yellow-600"
                        : assessor.group_presentation.customer_focus !== null &&
                          assessor.group_presentation.customer_focus > 3
                        ? "text-green-600"
                        : "text-red-600"
                    }`}>
                    {assessor.group_presentation.customer_focus ?? "-"}
                  </td>
                  <td
                    className={`p-2 border-l text-sm md:text-base ${
                      assessor.group_presentation.problem_solving !== null &&
                      assessor.group_presentation.problem_solving >= 2 &&
                      assessor.group_presentation.problem_solving <= 3
                        ? "text-yellow-600"
                        : assessor.group_presentation.problem_solving !==
                            null &&
                          assessor.group_presentation.problem_solving > 3
                        ? "text-green-600"
                        : "text-red-600"
                    }`}>
                    {assessor.group_presentation.problem_solving ?? "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
