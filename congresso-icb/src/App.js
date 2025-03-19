import './App.css';
import logo from './logo_header.png';
import imagem from './logo_main.svg';
import logofooter from './logo_footer.png';
import { useRef } from 'react';
import Button from './Button';

function App() {
  const aboutRef = useRef(null);
  const speakersRef = useRef(null);
  const commiteRef = useRef(null);

  const handleScrollTo = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleClick = () => {
    window.location.href = "https://forms.gle/UibDKTz8EYf1eD7j9";
  };
  return (
    <div>
    <div className="App mx-auto">
      <header className="h-auto min-h-16 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between bg-[#00708A]">
        <img
          src={logo}
          alt="Logo da conferência"
          className="hidden md:block w-12 h-12 md:w-16 md:h-16 object-contain mb-3 md:mb-0"
        />
        <nav className="flex space-x-3 md:space-x-6 text-sm md:text-base">
          <a href="#About" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(aboutRef)}>
            About
          </a>
          <a href="#Speakers" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(speakersRef)}>
            Speakers
          </a>
          <a href="#Commite" className="text-white hover:text-gray-300" onClick={() => handleScrollTo(commiteRef)}>
            Committee
          </a>
        </nav>
      </header>


      <div className="flex justify-center mt-4 md:mt-8">
        <img src={imagem} alt="Imagem representativa da conferência" className="h-32 md:h-48 object-contain" />
      </div>
      
      {/* 
      <div className="flex flex-col items-center justify-center py-4 md:py-8 px-4 text-center">
        <h1 className="text-lg md:text-xl font-medium text-[#00708A] uppercase tracking-wide mb-4 md:mb-6">
          CLICK THE BUTTON BELOW TO SUBSCRIBE
        </h1>
        <button 
          onClick={handleClick} 
          className="bg-[#00708A] hover:bg-teal-700 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-md shadow-md uppercase"
        >
          SUBSCRIBE
        </button>
      </div> 
      */}

      <div className="mt-6 md:mt-8 px-4 md:px-8 lg:px-16" ref={aboutRef}>
        <h1 className="text-2xl md:text-3xl font-inter font-bold text-gray-700 text-center">About The Meeting</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto"></div>
        <p className="mt-4 md:mt-6 text-left text-sm md:text-base" style={{ color: '#00708A' }}>
          Fundamental Aspects of DNA Repair and Mutagenesis (FARM-DNA) is an international conference in the area of DNA repair, mutagenesis, and genomic stability, that fosters interactions between scientists and students in a stimulating and open setting that facilitates the exchange of ideas and expertise.
        </p>
        <p className="mt-3 md:mt-4 text-left text-sm md:text-base" style={{ color: '#00708A' }}>
          Previous editions were held in São Paulo (1999, 2003, 2007, 2013 and 2018) and in Belo Horizonte (2009). The 2013 and 2018 editions were satellite meetings to the International Conference on Environmental Mutagenesis (ICEM - 2013) and the International Congress of Genetics (ICG - 2018), and the 2025 edition will be a satellite meeting to the Brazilian Mutagenesis Society meeting in Natal.
        </p>
      </div>

      <div className="mt-8 md:mt-12 px-4 md:px-8 lg:px-16" ref={speakersRef}>
        <h1 className="text-2xl md:text-3xl font-inter font-bold text-gray-700 text-center">Invited Speakers</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-11/12 lg:w-10/12 mx-auto p-2 md:p-4 text-sm md:text-base">
          {/* Coluna 1 */}
          <div className="bg-gray-100 p-3 md:p-4">
            <div className="space-y-3 md:space-y-4">
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Andrés Aguilera</h3>
                <p style={{ color: '#00708A' }}>(Univ. Seville, Spain)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Luís Batista</h3>
                <p style={{ color: '#00708A' }}>(Washington Univ. St. Louis, USA)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Vilhelm Bohr</h3>
                <p style={{ color: '#00708A' }}>(Univ. Copenhagen, Denmark)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Keith Caldecott</h3>
                <p style={{ color: '#00708A' }}>(Univ. Sussex, UK)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Anna Campalans</h3>
                <p style={{ color: '#00708A' }}>(CEA, France)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Vanesa Gottifredi</h3>
                <p style={{ color: '#00708A' }}>(Institute Leloir, Argentina)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Abby Green</h3>
                <p style={{ color: '#00708A' }}>(Washington Univ. St. Louis, USA)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Jan Hoeijmakers</h3>
                <p style={{ color: '#00708A' }}>(Erasmus MC, Netherlands)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Gianluca Tell</h3>
                <p style={{ color: '#00708A' }}>(Univ. Udine, Italy)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Stephen West</h3>
                <p style={{ color: '#00708A' }}>(Francis Crick Institute, UK)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Evi Soutoglou</h3>
                <p style={{ color: '#00708A' }}>(Univ. Sussex, UK)</p>
              </div>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="bg-gray-100 p-3 md:p-4">
            <div className="space-y-3 md:space-y-4">
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>David Wilson</h3>
                <p style={{ color: '#00708A' }}>(Hasselt Univ., Belgium)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Patricia Kannouche</h3>
                <p style={{ color: '#00708A' }}>(Gustave Roussy Institute, France)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Richard McCulloch</h3>
                <p style={{ color: '#00708A' }}>(Univ. Glasgow, Scotland)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Manuel Muñoz</h3>
                <p style={{ color: '#00708A' }}>(Univ. Buenos Aires, Argentina)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>André Nussenzweig</h3>
                <p style={{ color: '#00708A' }}>(NIH, USA)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Annabel Quinet</h3>
                <p style={{ color: '#00708A' }}>(INSERM, France)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Pablo Radicella</h3>
                <p style={{ color: '#00708A' }}>(CEA, France)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Carlos Robello</h3>
                <p style={{ color: '#00708A' }}>(Institute Pasteur, Uruguay)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Alain Sarasin</h3>
                <p style={{ color: '#00708A' }}>(Gustave Roussy Institute, France)</p>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: '#00708A' }}>Marcus Smolka</h3>
                <p style={{ color: '#00708A' }}>(Cornell Univ., USA)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 md:mt-12 px-4 md:px-8 lg:px-16" ref={commiteRef}>
        <h1 className="text-2xl md:text-3xl font-inter font-bold text-gray-700 text-center">Organizing Committee</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-4"></div>
        <div className="text-center space-y-2 md:space-y-4 text-sm md:text-base">
          <h3 style={{ color: '#00708A' }}>Rodrigo Galhardo (Univ. São Paulo, Brazil)</h3>
          <h3 style={{ color: '#00708A' }}>Nícolas Hoch (Univ. São Paulo, Brazil)</h3>
          <h3 style={{ color: '#00708A' }}>Carlos Menck (Univ. São Paulo, Brazil)</h3>
          <h3 style={{ color: '#00708A' }}>Nadja Pinto (Univ. São Paulo, Brazil)</h3>
          <h3 style={{ color: '#00708A' }}>Roger Woodgate (NIH, USA)</h3>
        </div>
      </div>
      
      <div className="font-sans p-3 md:p-4 mt-6 md:mt-8 px-4 md:px-8 lg:px-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-4 md:mb-8">Preliminary Program</h1>
        <div className="w-full h-px bg-gray-500 mt-4 mx-auto mb-4"></div>
        
        <div className="subtitulo mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl text-teal-600 font-medium mb-2 md:mb-4 text-left">November 1st</h2>
          <div className="texto text-xs md:text-sm leading-relaxed pl-2 md:pl-6 mt-2">
            <p className="text-black text-left">
              Registration from 8:00 hs <br />
              (short courses on DNA repair and Mutagenesis from 10:00 to 12:30 hs)  <br /><br />

              10:00 to 12:00 Debate of the Theme "The Evolution is a Fact" (in Portuguese) with the book (same title) published by the Brazilian Academy of Sciences in 2024, with the participation of students from a public High School.<br /><br />

              14:00 h VII FARM-DNA Opening Why do we need a FARM-DNA meeting in Brazil?<br /><br />
              Carlos Frederico Martins Menck<br />

              14:30 h - Opening Lectures (30-45 minutes)<br /><br />

              14:30 h - <br />
              Chair: Nadja C. de Souza-Pinto<br />
              Andres Aguilera, Universidad de Sevilla, Seville, Spain<br />
              Transcription-replication conflicts in genome instability, a different role for RNA and chromatin<br />

              15:15 h -<br />
              Chair: Carlos Frederico Martins Menck<br />
              Alain Sarasin, Institut Goustave Roussi, Villejuif, France.<br />
              Genomic Analysis of Internal Cancers from Xeroderma Pigmentosum Patients Revealed New Mechanisms of Endogenous Mutagenesis.<br /><br />

              16:00 Coffee break 30 minutes<br /><br />

              16:30 - 18:30 h- Symposium 1 - DNA damage and cancer<br />
              Chair: Roger Woodgate<br /><br />

              Mark O'Connor, Oncology R&D, AstraZeneca, Cambridge, UK<br />
              Targeting tumour DNA repair vulnerabilities to generate new cancer therapies<br /><br />

              Jenifer Saffi, UFSPA, RS, Brazil<br />
              DNA damage response: influence on the toxicity of antineoplastic compounds and potential value as predictive and prognostic markers in colorectal cancer<br /><br />

              Abby Green, Washington University, St. Louis, USA.<br />
              Exploiting mutagenic processes in cancer for therapeutic benefit<br /><br />

              Leonardo Karran Teixeira, Brazilian National Cancer Institute (INCA), Rio de Janeiro, RJ, Brazil.<br />
              Oncogene-induced replication stress and genomic instability in human cancer<br /><br />

              Short talk (15 min)<br />

              19:00 h- Welcome Drink!
            </p>
          </div>
          </div> 
        
        <div className="subtitulo mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl text-teal-600 font-medium mb-2 md:mb-4 text-left">November 2nd</h2>
          <div className="texto text-xs md:text-sm leading-relaxed pl-2 md:pl-6 mt-2">
            <p className="text-black text-left">
            8:30 - 10:30 h- Symposium 2 – Replication through DNA damage<br />
            Chair: Leonardo Karran Teixeira<br /><br />

            Andre Nussenzweig, National Cancer Institute National Institutes of Health, Rockville, MD, USA<br />
            Structure and repair of replication-coupled DNA breaks<br /><br />

            Vanesa Gottifredi, Fundación Instituto Leloir, IIBBA/ CONICET, Buenos Aires, Argentina<br />
            Chromosomal instability: a prelude to cell killing or an avoidable side effect of chemotherapy<br /><br />

            Keith Caldecott, University of Sussex, Falmer, Brighton, UK<br />
            PARP activity in DNA replication, repair and human disease<br /><br />

            Maria Carolina Q B Elias Sabbaga, Instituto Butantan, São Paulo, Brazil<br />
            Insights into DNA Replication and Its Potential Influence on Trypanosoma cruzi's Infection<br /><br />

            Short talk (15 min)<br /><br />

            Coffee break 30 minutes<br /><br />

            11:00 -13:00 h- Symposium 3- Genomic stress and aging<br />
            Chair: Rodrigo Galhardo<br /><br />

            Vilhelm Bohr, University of Copenhagen, Copenhagen, Denmark<br />
            DNA damage signaling to mitochondria in neurodegeneration and aging<br /><br />

            Manuel Muñoz, Universidad de Buenos Aires, Buenos Aires, Argentina<br />
            RNA Polymerase II Degradation Triggered by DNA Repair Occurs In Trans and Independently of how the Lesion is Recognised<br /><br />

            David M Wilson 3rd, Hasselt University, Diepenbeek, Belgium.<br />
            Genomic Stress and DNA Repair Mechanisms in the Second Brain<br /><br />

            Nadja C de Souza-Pinto, Institute of Chemistry, University of Sao Paulo, Brazil<br />
            Mitochondrial DNA methylation at the crossroads between transcription and repair<br /><br />

            Short talk (15 min)<br /><br />

            LUNCH- 60 minutes<br /><br />

            14:00 h- Full lectures<br />
            Chair: Carlos Renato Machado<br />
            Richard McCulloch, University of Glasgow, Glasgow, UK<br />
            A coherent model for the initiation and execution of trypanosome immune evasion through targeted antigen gene recombination?<br />
            14:45-<br />
            Chair: Carlos Frederico Martins Menck<br />
            Roger Woodgate, National Institutes of Health, Bethesda, MD, USA.<br />
            Regulation of Highly Mutagenic PolVR391 in Enterobacteriaceae<br /><br />

            15:30: Coffee break 20 minutes<br /><br />

            15:50 -17:15 h- Symposium 4 – Is DNA repair similar for different organisms?<br />
            Chair: Nicolas Carlos Hoch<br /><br />

            Rodrigo Galhardo, Institute of Biomedical Sciences, Universidade de São Paulo, Brazil<br />
            Unveiling novel DNA repair pathways in bacteria<br /><br />

            J Pablo Radicella, UMR Stabilité Génétique Cellules Souches et Radiations, F-92260 Fontenay-aux-Roses, France.<br />
            Dissecting the mechanisms of horizontal gene transfer in Helicobacter pylori<br /><br />

            Carlos Renato Machado, Universidade Federal de Minas Gerais, Belo Horizonte, Brazil.<br />
            DNA repair in Trypanosoma cruzi: differences and similarities in an atypical organism<br /><br />

            Coffee break in the POSTER SESSION- 17:30-19:30 h<br />
            </p>
          </div> 
        </div>

        <div className="subtitulo mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl text-teal-600 font-medium mb-2 md:mb-4 text-left">November 3rd</h2>
          <div className="texto text-xs md:text-sm leading-relaxed pl-2 md:pl-6 mt-2">
            <p className="text-black text-left">
              8:30 - 10:30 h- Symposium 5 – Responses to genome damage<br />
              Chair: Nadja C de Souza-Pinto<br /><br />

              Nicolas Carlos Hoch, Institute of Chemistry, University of São Paulo, Brazil.<br />
              Molecular mechanisms of cell death by PARP1 hyperactivation<br /><br />

              Evi Soutoglou, University of Sussex, Brighton, UK.<br />
              Genome organization in DNA repair<br /><br />
              
              Hannes Lans, Erasmus Medical Center, Rotterdam, The Netherlands<br />
              Persistent DNA repair intermediates and human DNA repair disease<br /><br />

              Marcus Smolka, Cornell University, Ithaca, NY, USA.<br />
              Signaling Mechanisms Controlling Genome Maintenance<br /><br />

              Short talk (15 min)<br /><br />

              Coffee break 30 minutes<br /><br />

              11:00 -13:00 h Symposium 6 – DNA damage signaling in Eukaryotic cells<br />
              Chair: Marcus Smolka<br /><br />

              Marcelo Santos da Silva, Institute of Chemistry, University of São Paulo, Brazil.<br />
              Analysis of cytotoxicity caused by thymidine analogs (BrdU and EdU) incorporation in trypanosomatids<br /><br />

              Carlos Robello, Facultad de Medicina, Universidad de la República, Montevideo, Uruguay.<br />
              Title: Epigenetic mechanisms affect gene expression in Trypanosoma cruzi<br /><br />

              Francisco Meirelles Bastos de Oliveira, Universidade Federal do Rio de Janeiro, RJ, Brazil<br />
              The role of CDK9 in yeast DNA replication stress response<br /><br />

              Jose Renato Cussiol, Brazil, Universidade Federal do Estado de São Paulo, SP, Brazil<br />
              Inositol Pyrophosphates in Double-strand break signaling and repairTitle<br /><br />

              Short talk (15 min)<br /><br />

              LUNCH- 60 minutes<br />

              14:00 -16:10 h- Symposium 7 – Nuclear stress and DNA repair <br />
              Chair: Vanesa Gottifredi<br /><br />

              Luis LF Batista, Washington University, St. Louis, USA.<br />
              Stability of the telomerase RNA component is essential for genome integrity and cellular function in the hematopoietic system<br /><br />

              Gianluca Tell, University of Udine, Udine, Italy.<br />
              Understanding the non-repair face of Base Excision Repair: novel perspectives in cancer biology <br /><br />

              Anna Campalans, UMR Stabilité Génétique Cellules Souches et Radiations, F-92260 Fontenay-aux-Roses, France.<br />
              Repair of oxidative DNA damage in the chromatin context<br /><br />

              Annabel Quinet, UMR Stabilité Génétique Cellules Souches et Radiations, F-92260 Fontenay-aux-Roses, France.<br />
              Repriming: an emerging mechanism of replication stress response in human cells<br /><br />

              Patrícia Kannouche, Institut Gustave Roussy, Université Paris-Saclay, Villejuif, France.<br />
              New insights into the functions of DNA polymerase zeta in mammalian cells<br /><br />

              16:10 Coffee break 20 minutes<br /><br />

              16:30- Closing Lectures (45 min):<br /><br />

              16:30-17:15<br />
              Chair: Carlos Frederico Martins Menck<br />
              Jan Hoeijmakers, Erasmus Medical Center, Rotterdam, The Netherlands.<br />
              DNA damage and transcription stress and the unexpected impact of nutrition on aging and medicine.<br /><br />

              17:15- 18:00<br />
              Chair: Roger Woodgate<br />
              Stephen West, The Francis Crick Institute, London, UK<br />
              Roles of the RAD51 paralogs in DNA repair and replication fork protection – changing paradigms<br />
            </p>
          </div> 
        </div>
      </div>
      </div>
      
      <div className="mt-6 md:mt-8 text-center w-full px-4 sm:w-4/5 md:w-3/4 lg:w-[56%] mx-auto">
          <h2 className="font-bold text-base md:text-lg">THE CONFERENCE WEBSITE IS UNDER CONSTRUCTION AND ADDITIONAL INFORMATION WILL BE AVAILABLE SHORTLY.</h2>
      </div>

      <footer className="footer mt-8 md:mt-12 bg-[#00708A]">
        <div className="footer-content flex justify-center py-4">
          <img src={logofooter} alt="Logo do rodapé da conferência" className="w-28 h-28 md:w-40 md:h-40" />
        </div>
      </footer>
    </div>
  );
}

export default App;