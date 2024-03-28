"use client";
import { useState } from 'react';

export default function AjoutMembre() {
    const [numMembre, setNumMembre] = useState('');
    const [tournaments, setTournaments] = useState([]);
    const [gender, setGender] = useState('');

    const personalInfo = { nom: 'Doe', prenom: 'John', sexe: 'M' };

    // Fetch tournament and match data based on Num_membre
    // useEffect(() => {
    //     // Replace with your data fetching logic
    //     // setPersonalInfo(fetchPersonalInfo(numMembre));
    //     // setTournamentData(fetchTournamentData(numMembre));
    //     // setMatchData(fetchMatchData(numMembre));
    // }, [numMembre]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-2xl font-bold text-center">Club de tennis Chaudière</h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="member-number" className="flex items-center gap-2">
                        <span>No membre</span>
                        <input
                            type="text"
                            value={numMembre}
                            onChange={(e) => setNumMembre(e.target.value)}
                            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <button
                            type="button"
                            className="flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background text-primary-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                    </label>
                    <input
                        type="text"
                        id="name"
                        readOnly
                        value="16725"
                        placeholder=""
                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="homme"
                            readOnly
                            checked={gender === 'homme'}
                            onChange={() => setGender('homme')}
                            className="h-4 w-4"
                        />
                        <label htmlFor="homme" className="ml-2">Homme</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="femme"
                            readOnly
                            checked={gender === 'femme'}
                            onChange={() => setGender('femme')}
                            className="h-4 w-4"
                        />
                        <label htmlFor="femme" className="ml-2">Femme</label>
                    </div>
                </div>
            </div>
            {tournaments.map((tournament, index) => (
                <div key={index} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <h2 className="font-semibold">Tournois</h2>
                            <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm">
                                    <tbody className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <tr>
                                            <td className="p-4 align-middle pr-0">Date debut: {tournament.date}</td>
                                            <td className="p-4 align-middle pr-0">Nom: {tournament.name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="font-semibold">Matchs du tournoi</h2>
                            <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm">
                                    <tbody className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        {tournament.matches.map((match, matchIndex) => (
                                            <tr key={matchIndex}>
                                                <td className="p-4 align-middle pr-0">Date: {match.date}</td>
                                                <td className="p-4 align-middle pr-0">Nature: {match.nature}</td>
                                                <td className="p-4 align-middle pr-0">Type: {match.type}</td>
                                                <td className="p-4 align-middle pr-0">Résultat: {match.resultat}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
}
