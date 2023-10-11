export default function copyToClipboard(element, link) {
    const url = "https://drawyourminds.de/DC/?link=" + link + "participants/getOneExperiment?id=" + element + "&participantID="
    console.log(url);
    navigator.clipboard.writeText(url);
}