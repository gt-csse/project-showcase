import { type Project } from "@/schema";

import imgageabCrown from '/project-images/dabcrown.png';
import imgageabCrownPerf1 from '/project-images/dabcrownperf-1.png';
import imgageabCrownPerf2 from '/project-images/dabcrownperf-2.png';


import imgInatInq from '/project-images/inat-img.png';
import imgPatientX from '/project-images/patientx-screenshot.png';
import imgAutoRA from '/project-images/autora-overview.png';
import imgAutoRAScreenshot from '/project-images/autora-screenshot.png';
import imgMars from '/project-images/mars.png';
import imgMarsScreenshot from '/project-images/mars-screenshot.png';
import imgRamanujanMachine from '/project-images/ramanujan_machine.png';
import imgRamanujanMachineScreenshot from '/project-images/ramanujan-screenshot.png';
import imgKokkosMaceMaterials from '/project-images/kokkos-mace-materials.png';
import imgProteinComparison from '/project-images/protein-comparison.png';
import imgIcetempAnalysis from '/project-images/icetemp-analysis.png';
import imgFastani from '/project-images/fastani-visualization.png';
import imgRl2Grid from '/project-images/rl2grid.png';
import imgRl2GridPerformance from '/project-images/rl2grid-performance.png';
import imgQcSchema from '/project-images/qcschema-v1v2.png';
import imgCoAuthorScreenshot from '/project-images/coauthor-screenshot.png';
import imgPsi4 from '/project-images/psi4.png';
import imgPsi4Screenshot from '/project-images/psi4-screenshot.png';
import imgXtribsScreenshot from '/project-images/xtribs-screenshot.png';
import imgLirec from '/project-images/lirec.png';
import imgLirecScreenshot from '/project-images/lirec-screenshot.png';
import imgCoauthorDemo from '/project-images/coauthor-demo.gif';
import imgIrisThumbnail from '/project-images/IRIS_thumbnail.jpeg';
import imgIrisNoMask from '/project-images/no-mask.jpeg';
import imgIrisGenMask from '/project-images/gen_mask.jpeg';
import imgIrisLanding from '/project-images/IRIS_landing.jpeg';
import imgGalileoThumbnail from '/project-images/galileo-thumbnail.png';
import imgGalileo1 from '/project-images/galileo_1.jpeg';
import imgGalileo2 from '/project-images/galileo_2.jpeg';
import imgGalileo0 from '/project-images/galileo_0.jpeg';



// Projects data extracted from the Georgia Tech CSSE website
export const projects: Project[] = [
  {
  id: 17,
  title: "d,α,β-CROWN: Distributed α,β-CROWN ",
  description: "<p>Neural network verification is the process of ensuring that a neural network behaves as expected for all possible inputs, confirming properties like safety, security, and correctness. Verification is crucial for deploying neural networks in safety-critical applications, such as control systems, autonomous vehicles, robotics, and AI factories, by ensuring that they are safe from adversarial input-based attacks.</p><p>Among neural network verifiers, <a href='https://github.com/Verified-Intelligence/alpha-beta-CROWN' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>α,β-CROWN</a> is an award-winning, state-of-the-art software solution. In this project, we advance the state of neural network verification by transforming α,β-CROWN into a scalable, high-performance platform capable of handling modern deep learning models. By introducing asynchronous execution, multi-GPU, and multi-node parallelism, it becomes possible to verify significantly larger networks and input domains than previously feasible, in shorter timeframes. Some verification tasks have very large search spaces, which can only be fully explored in meaningful timeframes, leveraging a distributed scaled approach. This capability directly strengthens the reliability of machine learning systems deployed in safety-critical domains where guarantees of correctness are essential. Beyond performance gains, the integration of rigorous profiling, testing, and reproducibility practices elevates the tool from a research prototype into robust infrastructure, supporting broader adoption and accelerating research in trustworthy AI.</p><p>The project addressed several fundamental challenges in α,β-CROWN. Existing workflows were previously constrained by the sequential execution of the computationally expensive branch-and-bound (BaB) operation and by underutilized hardware and scalability. To overcome these limitations, the project introduced architectural improvements that reduced Python-level bottlenecks and enabled asynchronous CPU–GPU pipeline coordination using Ray framework. The work also tackled the challenges of scaling across multiple GPUs and distributed nodes, leading to near-linear speed ups. In addition, the resulting codebase incorporates stronger software engineering practices, including improved testing and documentation while preserving compatibility with ongoing research workflows.</p>",
  summary: "Distributed and scalable implementation of α,β-CROWN for neural network verification using Ray",
  imageUrl: imgageabCrown,
  category: ["ai-ml", "data-science"],
  githubUrls: ["https://github.com/Verified-Intelligence/alpha-beta-CROWN"],
  demoUrl: [],
  featured: false,
  achievements: [
    "Delivered a multi-node, multi-GPU version of BaB implementations using Ray in the α,β-CROWN repository with a single node single GPU performance of at least ~90%+ of existing PIs previous code base.",
    "Exceeded scale out performance ratio goal of 4:3 on multi-node, multi-gpu infrastructure by demonstrating 4:3.8 (ReLU BaB) and 4:3.9 (Input BaB) scale out performance ratios on provided benchmark jobs. "
  ],
  goals: [
    "Enable pipeline decoupling and asynchronous execution to evaluate the feasibility of parallelizing the α,β-CROWN stack across distributed GPU infrastructure. ",
    "Achieve multi-GPU, multi-node scaling with a target scale out performance improvement ratio of at least 4:3, e.g., adding 8 GPUs must lead to at least 6x faster performance. ",
    "Ensure all new software is well-tested, documented and delivered to PI repository. "
  ],
  softwareSolution: "<p>We evaluated several parallelization frameworks compatible with the Python-based α,β-CROWN stack and selected <a href='https://docs.ray.io/en/latest/index.html' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Ray</a> due to its strong support for pipeline abstractions, actor-based execution, seamless scaling from single-node to multi-node environments, and production readiness. Using Ray, we reimplemented both types of BaB (ReLU and Input), the primary bottleneck in the verification workflow. This effort exposed data-level constraints in the existing codebase that prevented clean pipeline decoupling and asynchronous execution. In collaboration with the PIs, we addressed these limitations, which subsequently revealed deeper transport-level constraints in the underlying stack, particularly the lack of efficient GPU-to-GPU communication support (e.g., RDMA/RDT integration for CUDA workloads). Based on these findings, we determined that system-level scaling would provide more immediate impact than further pipeline decoupling given current ecosystem limitations.</p> <p> To achieve scalable performance, we extended the Ray-based implementation to distribute the BaB workload across multiple GPUs within a node and across multiple nodes. This change revealed an additional bottleneck: reliance on a centralized global task queue that constrained parallel execution. To address it, we designed a hierarchical task management approach that maintains a global task pool at the cluster level while allowing each GPU to operate primarily on a local task queue, synchronizing only when necessary. This design reduced contention and enabled near-linear scaling, exceeding the target 4:3 scale out performance ratio across both variants of the BaB algorithm.</p> <p> We also developed a streamlined execution harness that allows distributed α,β-CROWN to be run with a single command on any <a href='https://slurm.schedmd.com/overview.html' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>SLURM</a>-enabled cluster, enabling consistent profiling and benchmarking throughout the project. All implementations were documented, validated with the PIs, and passed all CI tests.</p>",
  impact: [
    "During our collaboration, we uncovered and resolved implicit scheduling and data structure assumptions in the α,β-CROWN implementation that limited scaling of key benchmark test cases. ",
    "Completion of this project enables PIs to leverage multi-node multi-GPU infrastructure to tackle larger unsolved problems, which were previously untenable on single GPU deployments. "
  ],
  detailedTechnologies: {
    programming: [
      { name: "Python", url: "https://www.python.org/" }
    ],
    frameworks: [
      { name: "Ray", url: "https://docs.ray.io/en/latest/ray-core/walkthrough.html" },
      { name: "CUDA", url: "https://docs.nvidia.com/cuda/" }
    ],
    hpcTools: [
      { name: "Slurm", url: "https://slurm.schedmd.com/documentation.html" },
      { name: "NSight", url: "https://developer.nvidia.com/nsight-systems" }
    ],
  },
  projectDetails: {
    startDate: "December 2025",
    endDate: "April 2026",
    source: "VISS",
    scientificDomain: "AI/ML, Neural Network Verification",
    partners: [
      { name: "Huan Zhang", profileUrl: "https://www.huan-zhang.com/" }
    ],
    softwareEngineers: [
      { name: "Robert Bates", profileUrl: "https://www.linkedin.com/in/arpieb/" },
      { name: "Ketan Bhardwaj", profileUrl: "https://www.linkedin.com/in/ketanbj/" },
      { name: "Mathieu Tanneau", profileUrl: "https://www.linkedin.com/in/mtanneau/" }
    ]
  },
  screenshots: [
        {
      url: imgageabCrownPerf1,
      alt: "",
      caption: "Performance comparison (no. of domains visited) of the distributed α,β-CROWN implementation against the existing single GPU implementation varying the number of GPUs and number of nodes used for an unsolved ReLU BaB job",
      description: ""
    },
    {
      url: imgageabCrownPerf2,
      alt: "",
      caption: "Performance comparison (no. of domains visited) of the distributed α,β-CROWN implementation against the existing single GPU implementation varying the number of GPUs and number of nodes used for an unsolved input BaB job",
      description: ""
    }
  ],
  references: [],
  metrics: [
    { label: "Multi-node, multi-gpu scale out performance ratio (Target: 4:3)", value: "Achieved: 4:3.8+" },
  ]
},
  {
    id: 15,
    title: "iNat x INQUIRE",
    description:
      "Advances in multi-modal machine learning, especially vision-language models, have the potential to transform ecological research and drive new scientific discoveries by enabling practitioners to efficiently search and process large-scale repositories of natural world images. In particular, the ability to search a large, living database of natural observations using natural language-based queries, combined with spatial and taxonomy-based filtering, would unlock significant value to the scientific and naturalist communities. In this partnership, we explored what it would take to integrate natural language search functionality into the <a href='https://www.inaturalist.org/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>iNaturalist</a> platform. iNaturalist is a non-profit organization that hosts the largest living dataset of natural world observations (450M observations in August 2025), which is curated by a community of millions of users. Previous collaboration between Dr. Sara Beery and iNaturalist led to the development of <a href='http://inquire-demo.csail.mit.edu/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>INQUIRE search</a>, which allows users to search over a static subset of the iNaturalist dataset using natural language queries. Early usage of INQUIRE search by ecologists has demonstrated the scientific value of introducing new modalities of data collection, which unlocks new approaches to answering scientific questions. Throughout the course of this partnership, we developed a large-scale data ingestion pipeline and search engine, ready for integration into the iNaturalist platform to bring text-based search capabilities to over 8M active users. In addition, we provide a detailed cost breakdown and benchmarking tool to help stakeholders find the most cost-effective integration strategy.",
    summary:
      "Enterprise-ready natural language image search solution for iNaturalist's 450M+ image dataset with scalable ETL pipeline and benchmarking framework",
    imageUrl: imgInatInq,
    category: ["ai-ml", "environmental-science"],
    githubUrls: ["https://github.com/inaturalist/Inquire-vector-search"],
    demoUrl: [],
    featured: false,
    achievements: [
      "Built an ETL pipeline to embed 4.8M images and load them into a vector database within 20 hours. This pipeline is designed to scale to the full iNaturalist dataset (450M images), with an expected runtime of ~1 day using GPUs for embedding computation",
      "Developed a scalable, production-ready search engine supporting natural language queries over 4.8M images, achieving sub-200 ms latency",
      "Implemented a configuration-driven system architecture that decouples infrastructure dependencies, enabling flexible deployment across hybrid cloud and local environments",
      "Created a benchmarking framework to evaluate embedding models (e.g., <a href='https://openai.com/research/clip' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>CLIP</a>, <a href='https://arxiv.org/abs/2303.15343' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>SigLip</a>) and vector database backends using key search metrics, including <a href='https://en.wikipedia.org/wiki/Evaluation_measures_(information_retrieval)#Mean_average_precision' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>mAP</a>, <a href='https://en.wikipedia.org/wiki/Discounted_cumulative_gain' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>NDCG</a>, <a href='https://en.wikipedia.org/wiki/Mean_reciprocal_rank' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>MRR</a>, <a href='https://en.wikipedia.org/wiki/Precision_and_recall' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>precision</a>, and <a href='https://en.wikipedia.org/wiki/Precision_and_recall' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>recall</a>",
      "Built CI/CD pipelines to automate unit and integration testing, as well as deployment of the search service to Azure",
      "Delivered a detailed report analyzing cost and performance trade-offs across models and hosting strategies, covering datasets up to 4.8M images and projected estimates for 450M+ images.",
      "Provided iNaturalist with tiered cost estimates to clarify how different budget levels impact system capabilities and scalability",
    ],
    goals: [
      "To provide iNaturalist with an enterprise ready natural language image search solution that can be deployed to all 8M active iNaturalist users over their full 450M image dataset",
      "To allow stakeholders to better understand the cost-performance trade-offs associated with the various options for hosting a natural language-based search service on iNaturalist so more informed decisions can be made about cost-effective ways to introduce such functionality into iNaturalist.",
      "To build out a production-ready ETL pipeline capable of reliably processing the full 450M image iNaturalist dataset",
    ],
    softwareSolution:
      "During the engagement, we developed iNatInq, a software tool that enables users to search large collections of images using natural language descriptions. For example, a user can type \"bird perched on a branch\" or \"tiger crossing a busy city street\", and the system returns the most visually relevant results, ranked by similarity. To support integration with iNaturalist's existing ecosystem, the tool includes a scalable ingestion pipeline that converts existing image data into a searchable format, a production-grade search API for retrieving results, and a configuration-driven architecture that allows teams to switch between underlying technologies and models without code changes, making it easy to benchmark alternatives and select the best approach based on metrics such as <a href='https://en.wikipedia.org/wiki/Evaluation_measures_(information_retrieval)#Mean_average_precision' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>mAP</a>, <a href='https://en.wikipedia.org/wiki/Discounted_cumulative_gain' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>NDCG</a>, <a href='https://en.wikipedia.org/wiki/Mean_reciprocal_rank' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>MRR</a>, <a href='https://en.wikipedia.org/wiki/Precision_and_recall' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>precision</a> and <a href='https://en.wikipedia.org/wiki/Precision_and_recall' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>recall</a>. The system is an enterprise-grade, fault-tolerant solution designed to handle the scale of iNaturalist's full dataset (450M+ images). To support this, the software uses an architecture that enables horizontal scaling in a cloud environment. For resilience, it incorporates <a href='https://en.wikipedia.org/wiki/Dead_letter_queue' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>dead-letter queues</a> to capture and retry failed processing jobs, as well as <a href='https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>circuit breaker patterns</a> to prevent cascading service failures, combined with retries using backoff, structured error coding, and built-in metric tracking for visibility into system health and performance. Additionally, we implement <a href='https://en.wikipedia.org/wiki/Change_data_capture' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Change Data Capture (CDC)</a> to ensure the search service remains up to date with changes to iNaturalist image data. The codebase is supported by a comprehensive testing suite, including unit, integration, and end-to-end tests, and CI/CD pipelines that automate test execution and deploy the search service directly to the cloud.",
    impact: [
      "Equipped iNaturalist stakeholders with a detailed cost breakdown, enabling informed planning for hosting the service at full dataset scale and integrating it into the production codebase",
      "Enabled a high-performance search experience that returns relevant results across 4.8M images with sub-200 ms latency",
      "Delivered benchmarking insights on quantization methods, helping stakeholders understand trade-offs between model performance and cost. Further research is set to follow on the impact of quantization in vision-language models",
      "Delivered a production-grade benchmarking framework that enables rapid swapping and evaluation of embedding models and vector backends, allowing researchers to efficiently measure and optimize natural language search performance on the <a href='https://github.com/inquire-benchmark/INQUIRE/tree/main/data' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>INQUIRE dataset</a>.",
      "Enabled an automated, self-healing ingestion and search pipeline at scale, unlocking new opportunities for large-scale data collection and empowering teams to explore and answer previously infeasible research questions.",
    ],
    detailedTechnologies: {
      cloud: [
        { name: "Azure", url: "https://azure.microsoft.com/" },
      ],
      vectorDatabases: [
        { name: "Qdrant", url: "https://qdrant.tech/" },
        { name: "Weaviate", url: "https://weaviate.io/" },
      ],
      dataProcessing: [
        { name: "Ray", url: "https://www.ray.io/" },
        { name: "Databricks", url: "https://www.databricks.com/" },
      ],
      backend: [
        { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
      ],
      infrastructure: [
        { name: "MinIO", url: "https://min.io/" },
        { name: "Docker", url: "https://www.docker.com/" },
        { name: "Redis", url: "https://redis.io/" },
        { name: "Prometheus", url: "https://prometheus.io/" },
      ],
    },
    projectDetails: {
      startDate: "September 2025",
      endDate: "April 2026",
      source: "VISS",
      scientificDomain: "Environmental Science",
      partners: [
        { name: "Sara Beery (Principal Investigator)", profileUrl: "https://www.linkedin.com/in/sara-beery-1ba89166/" },
        { name: "iNaturalist Team", profileUrl: "https://www.inaturalist.org/pages/team" },
      ],
      softwareEngineers: [
        { name: "Alex Djalali", profileUrl: "https://www.linkedin.com/in/alex-djalali-272502273/" },
        { name: "Ketan Bhardwaj", profileUrl: "https://www.linkedin.com/in/ketanbj/" },
        { name: "Varun Narayan", profileUrl: "https://www.linkedin.com/in/varun-n/" },
        { name: "Austin Weeks", profileUrl: "https://www.linkedin.com/in/austinweeks/" },
        { name: "Jeremy Garcia", profileUrl: "https://www.linkedin.com/in/jeremygarcia23/" },
        { name: "Varun Agarwal", profileUrl: "" },
      ],
    },
    screenshots: [],
  },
  {
    id: 1,
    title: "PatientX.AI",
    description:
      "PatientX.AI is a machine learning-powered system designed to surface shared experiences among patients and caregivers navigating neurodegenerative diseases such as dementia. By analyzing thousands of posts from online health forums, the platform identifies frequently discussed topics—ranging from early symptoms to caregiving challenges—helping illuminate the typical patient journey. These insights empower caregivers, healthcare professionals, and patients themselves with clear understanding of what to expect. By bridging the gap between lived experiences and clinical care, PatientX.AI enhances communication between communities and care providers. The system brings transparency to the healthcare journey, uncovering patterns that can inform both individual decision-making and broader resource planning.",
    summary:
      "Machine learning system that analyzes patient forum data to identify shared experiences and challenges in neurodegenerative diseases",
    imageUrl: imgPatientX,
    category: ["ai-ml", "biomedical-engineering"],
    githubUrls: ["https://github.com/varun646/PatientX.AI"],
    demoUrl: [],
    featured: true,
    achievements: [
      "Improved topic detection capabilities using BERTopic for colloquial and context-rich language",
      "Enhanced interpretability with LLM-generated summaries of representative posts",
      "Uncovered over 150+ commonly experienced challenges",
      "Discovered new issues previously missed in patient/caregiver conversations",
      "Refined topic modeling pipeline for better understanding of patient forums",
    ],
    goals: [
      "Improve the topic detection capabilities of PatientX.AI",
      "Enhance the interpretability and clarity of identified topics for end users",
      "Enable healthcare professionals to identify unmet needs and intervention opportunities",
      "Support patients and caregivers in anticipating the course of illness through shared experiences",
    ],
    softwareSolution:
      "The project refined PatientX.AI's topic modeling pipeline using BERTopic, which proved effective for understanding colloquial and context-rich language in patient forums. We evaluated multiple modeling strategies and ultimately integrated LLMs to improve interpretability. These models were used to generate high-quality summaries of representative posts, making the discovered topics more accessible and easier to act upon. The overall solution focused on extracting and presenting meaningful, human-readable narratives from noisy, real-world forum data—making PatientX.AI more useful for its target audience.",
    screenshots: [
      {
        url: imgPatientX,
        alt: "PatientX Command-line Interface",
        caption:
          "Command-line interface for the PatientX.AI tool showing available options",
        description:
          "The image above shows the command-line interface for the PatientX.AI tool. The interface provides options for processing data including embeddings path, representation docs, topic size, clustering models, and more. These options allow researchers to customize how patient forum data is processed and how topic modeling is applied to extract meaningful insights. This interface is a key component of the solution developed by the engineering team, enabling researchers to analyze patient experiences with dementia and create comprehensive journey maps.",
      },
    ],
    impact: [
      "Uncovered over 150+ commonly experienced challenges",
      "New issues uncovered that were previously missed in patient/caregiver conversations",
      "Enhanced communication between communities and care providers",
      "Brought transparency to the healthcare journey for neurodegenerative diseases",
    ],
    detailedTechnologies: {
      machineLearning: [
        { name: "BERTopic", url: "https://maartengr.github.io/BERTopic/" },
        { name: "Ollama", url: "https://ollama.com/" },
        { name: "Mistral", url: "https://mistral.ai/" },
        { name: "OpenAI API", url: "https://openai.com/api/" },
      ],
      naturalLanguageToolkit: [
        { name: "spaCy", url: "https://spacy.io/" },
        { name: "NLTK", url: "https://www.nltk.org/" },
      ],
      backend: [{ name: "Python", url: "https://python.org/" }],
    },
    projectDetails: {
      startDate: "November 2024",
      endDate: "April 2025",
      source: "VISS",
      scientificDomain: "Neuroscience",
      partners: [
        { name: "Coco Newton (Principal Investigator)", profileUrl: "https://www.linkedin.com/in/coconewton/" },
        { name: "Jiwon Jung", profileUrl: "https://www.linkedin.com/in/drjiwonjung/" },
      ],
      softwareEngineers: [
        { name: "Varun Narayan", profileUrl: "https://www.linkedin.com/in/varun-n/" },
        {
          name: "Robin Fiévet",
          profileUrl: "https://www.linkedin.com/in/robin-fievet-6189a431/",
        },
      ],
    },
  },
  {
    id: 2,
    title: "AutoRA: Automated Research Assistant",
    description:
      "AutoRA is a Python package designed to automate the design and evolution of behavioral psychology experiments. It leverages active learning techniques to identify the most informative parameters for each experimental trial, allowing researchers to iteratively refine their understanding of human behavior. By guiding experimenters toward the most insightful data, AutoRA accelerates discovery in cognitive and behavioral sciences. The tool reduces the overhead of experiment design while enhancing scientific rigor. Researchers can deploy customizable, automated experiments that adapt over time—making AutoRA particularly valuable for exploring complex hypotheses or dynamic behavioral models.",
    summary:
      "Python package for automating behavioral psychology experiments using active learning techniques",
    imageUrl: imgAutoRA,
    category: ["data-science", "psychology"],
    githubUrls: ["https://github.com/AutoResearch/AutoRA-experiment-server"],
    demoUrl: [],
    featured: false,
    achievements: [
      "Developed reusable experiment template using Copier for rapid configuration and deployment",
      "Removed dependencies on Firebase and Firestore to support local-only deployments",
      "Created researcher-friendly interface for deploying starter experiments",
      "Supported 10+ commonly used psychology experiments in template",
      "Improved accessibility for international users with data privacy concerns",
      "Released AutoRA experiment server acknowledged in related AutoRA JOSS Paper",
    ],
    goals: [
      "Expand the AutoRA user base by eliminating dependencies on third-party deployment platforms",
      "Provide a researcher-friendly interface for deploying starter experiments using the AutoRA framework",
      "Improve accessibility and usability for international users, especially those with data privacy concerns",
    ],
    softwareSolution:
      "To streamline experiment deployment, we created a Copier-based project template that enables researchers to configure and launch their own experiments with minimal setup. The template supports local deployment, removing the reliance on platforms like Firebase and Firestore, and allows researchers to select from 10+ commonly used psychology experiments. This local-first approach ensures that researchers—especially those in regions with stringent data privacy laws (e.g., GDPR in the EU)—can confidently use AutoRA without risking exposure of participant data. The result is a lightweight, self-contained experiment deployment pipeline compatible with a wide range of research needs.",
    projectDetails: {
      startDate: "April 2024",
      endDate: "October 2024",
      source: "VISS",
      scientificDomain: "Behavioral Psychology",
      partners: [
        { name: "Sebastian Musslick (Principal Investigator)", profileUrl: "" },
        { name: "Younes Strittmatter", profileUrl: "" },
      ],
      softwareEngineers: [
        { name: "Kate Rachwal", profileUrl: "https://www.linkedin.com/in/kasiarachwal/" },
        { name: "Varun Narayan", profileUrl: "https://www.linkedin.com/in/varun-n/" },
      ],
    },
    screenshots: [
      {
        url: imgAutoRAScreenshot,
        alt: "AutoRA Experiment Server Interface",
        caption:
          "AutoRA experiment setup and response interface showing the experiment template configuration",
        description:
          "The image above shows the AutoRA experiment server interface. The left side displays the configuration process for behavioral experiments, where researchers can define project names, choose theorists, and set up deployment options. The right side shows a sample experiment output with a color identification task. The AutoRA experiment server provides a seamless way to create and deploy web-based behavioral experiments using jsPsych with integration into the Prolific participant recruitment platform, all managed through Docker and GitHub Actions for automated deployment.",
      },
    ],

    impact: [
      "The resulting AutoRA experiment server has been released by the researchers and was acknowledged as part of the related AutoRA JOSS Paper",
      "Eliminated third-party deployment dependencies for enhanced privacy",
      "Accelerated experiment setup and deployment for behavioral researchers",
      "Enabled GDPR-compliant research for international users",
    ],
    detailedTechnologies: {
      core: [
        { name: "Python", url: "https://python.org/" },
        { name: "Copier", url: "https://copier.readthedocs.io/" },
      ],
      backend: [{ name: "FastAPI", url: "https://fastapi.tiangolo.com/" }],
      frontend: [{ name: "jsPsych", url: "https://www.jspsych.org/" }],
      deployment: [
        { name: "Docker", url: "https://docker.com/" },
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
    },
  },
  {
    id: 3,
    title: "MARS: Metadata Aggregator for Reusable/Reproducible Science",
    description:
      "Metadatify, formerly known as MARS (Metadata Aggregation for Reproducible Science), is an open-source, web-based platform that streamlines the creation, management, and discovery of scientific metadata. Researchers often struggle with fragmented datasets, ad hoc spreadsheets, or bespoke tools that hinder data sharing and reproducibility. Metadatify provides a unified interface for rich metadata entry (including CSV/JSON imports), advanced full-text and attribute-based search, and collaborative workspace management. The platform facilitates collaboration through ORCID-driven invitations and project workspaces, while guaranteeing data integrity through uniqueness constraints, audit trails, and timestamped records. The development pipeline was fortified with Jest unit tests, Cypress end-to-end tests, and GitHub Actions workflows, ensuring every merge passes through client, server, and integration test suites.",
    summary:
      "Open-source web platform for scientific metadata management with advanced search and collaboration features",
    imageUrl: imgMars,
    category: ["data-science", "computer-science"],
    githubUrls: ["https://github.com/Brain-Development-and-Disorders-Lab/mars"],
    demoUrl: ["https://metadatify.com/"],
    featured: false,
    achievements: [
      "Delivered interactive Query Builder supporting combined text and structured searches with drag-and-drop UI",
      "Implemented full JSON/CSV import-export with entity mapping and 'export all' functionality",
      "Added ORCID-powered collaborator management and workspace sharing for team-based science",
      "Built templating features for rapid scenario setup with 'save as template' on attribute creation",
      "Enforced data integrity via timestamped records and uniqueness validations",
      "Enhanced UI/UX with sortable tables, improved modals/buttons, and typeahead fields",
      "Expanded testing suite from unit through feature tests with comprehensive coverage",
      "Automated CI/CD on GitHub Actions and set up Docker-based local environments",
      "Published conference poster demonstrating MARS capabilities to the US-RSE community",
      "Increased metadata quality and consistency, lowering error rates in downstream analyses",
    ],
    projectDetails: {
      startDate: "November 2023",
      endDate: "May 1, 2024",
      source: "VISS",
      scientificDomain: "Research data aggregator",
      partners: [
        { name: "Linda Richards", profileUrl: "" },
        { name: "Henry Burges", profileUrl: "" },
      ],
      softwareEngineers: [
        {
          name: "Robin Fiévet",
          profileUrl: "https://www.linkedin.com/in/robin-fievet-6189a431/",
        },
      ],
    },
    goals: [
      "Facilitate collaboration and access control via ORCID-driven invitations and project workspaces",
      "Guarantee data integrity through uniqueness constraints, audit trails, and timestamped records",
      "Maintain rapid, high-quality releases with comprehensive automated testing and continuous integration",
      "Support robust import/export workflows (CSV, JSON) and reusable templates to speed up new dataset onboarding",
    ],

    softwareSolution:
      "We built a full-stack application with a Node.js/Express backend and a React/TypeScript frontend. Key features include a dynamic Query Builder that lets scientists compose complex filters via drag-and-drop UI, JSON and CSV import/export routines that map existing entities by ID and allow 'save as template' workflows, and a relationship explorer that visualizes links between metadata entries. To support team-based science, we integrated [ORCID-powered](https://orcid.org/oauth) collaborator management and workspace sharing.",
    screenshots: [
      {
        url: imgMarsScreenshot,
        alt: "MARS Dashboard Interface",
        caption:
          "MARS dashboard interface showing collections, entities, and recent activity tracking",
        description:
          "The MARS dashboard interface with collections and entities management on the left, and an activity log that tracks recent changes on the right. Users can create and manage collections, entities, and attributes through an intuitive interface with enhanced search functionality and [ORCiD](https://orcid.org/oauth) verification for security.",
      },
    ],

    impact: [
      "Published a conference poster demonstrating MARS capabilities to the US-RSE community",
      "Enabled Henry Burgess to support and continue contributing new features with more efficient CI/CD",
      "Increased metadata quality and consistency, lowering error rates in downstream analyses",
    ],
    detailedTechnologies: {
      backend: [
        { name: "Node.js", url: "https://nodejs.org/" },
        { name: "Express", url: "https://expressjs.com/" },
        { name: "MongoDB", url: "https://mongodb.com/" },
      ],
      frontend: [
        { name: "React", url: "https://reactjs.org/" },
        { name: "TypeScript", url: "https://typescriptlang.org/" },
      ],
      testing: [
        { name: "Jest", url: "https://jestjs.io/" },
        { name: "Cypress", url: "https://cypress.io/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      auth: [
        { name: "ORCID OAuth integration", url: "https://orcid.org/oauth" },
      ],
      dataFormats: ["JSON import/export", "CSV export/import"],
    },
  },
  {
    id: 4,
    title: "The Ramanujan Machine",
    description:
      "The Ramanujan Machine is a novel way to find new mathematical formulas related to fundamental constants like π (pi), e, and the Riemann zeta function, traditionally discovered through intuition or ingenuity. Using an algorithmic approach, the Ramanujan Machine generates new mathematical conjectures (a statement or hypothesis believed to be true based on evidence or patterns, but not yet rigorously proven) that mathematicians can then attempt to prove. The Ramanujan Machine was developed with the goal of automating the discovery of mathematical formulas and making this process accessible to the broader mathematical community.",
    summary:
      "Algorithmic approach to discovering new mathematical formulas and conjectures related to fundamental constants",
    imageUrl: imgRamanujanMachine,
    category: ["computational-science", "mathematics"],
    githubUrls: ["https://github.com/RamanujanMachine/ramanujan-machine-web"],
    demoUrl: [],

    featured: false,
    achievements: [
      "Created web application for mathematicians to submit continued fractions for analysis",
      "Integrated Wolfram Alpha API and LIReC for conjecture database queries",
      "Improved BOINC infrastructure for distributed computing across Linux, macOS, and Windows",
      "Built binary packages using cx_Freeze for cross-platform deployment",
      "Enhanced job execution engine with better diagnostic feedback",
      "Developed new heuristic and search space for formula discovery",
    ],
    projectDetails: {
      startDate: "November 2023",
      endDate: "June 2024",
      source: "VISS",
      scientificDomain: "Mathematics, Number Theory",
      partners: [
        { name: "Ido Kaminer", profileUrl: "" },
        { name: "Michael Shalyt", profileUrl: "" },
      ],
      softwareEngineers: [{ name: "Kate Rachwal", profileUrl: "https://www.linkedin.com/in/kasiarachwal/" }],
    },
    goals: [
      "Increase the visibility of The Ramanujan Machine by creating an experience where contributing mathematicians can submit conjectures for potential exploration",
      "Increase the number of contributed computing resources through enhancements to The Ramanujan Machine's distributed job execution engine",
    ],
    softwareSolution:
      "During this engagement, we developed a web application that enables contributing mathematicians to submit continued fractions for analysis. The application assesses whether these fractions converge to established conjectures or theorems and evaluates their potential for algorithmic exploration. To identify relevant similarities, well-known conjecture databases are queried using the Wolfram Alpha API and LIReC. The results are then presented in the expected format with the MathJax library for mathematical notation rendering. We improved the Ramanujan Machine BOINC infrastructure (a platform enabling users to donate idle computing resources to scientific research) to maximize the value of contributed computational power. Previously, functionality was limited to donated Linux machines, the Ramanujan packages remained outdated due to missing private keys, domain knowledge was lost following team turnover, and executed jobs frequently crashed without providing diagnostic feedback. During our engagement, we addressed these challenges by creating binary packages using cx_Freeze for Linux, macOS, and Windows, rebuilding the build pipeline as GitHub Actions, and refining BOINC configuration files to generate meaningful diagnostic information when errors occurred.",
    screenshots: [
      {
        url: imgRamanujanMachineScreenshot,
        alt: "Ramanujan Machine Interface",
        caption:
          "The Ramanujan Machine web interface for polynomial continued fraction exploration",
        description:
          "The image above shows the Ramanujan Machine web portal interface. The left panel allows researchers to input polynomials for the numerator (a_n) and denominator (b_n) of a continued fraction, along with the calculation depth (n). The middle and right panels display the results, including the computed value of the continued fraction and visual representations of various mathematical relationships. This web portal makes the Ramanujan Machine algorithms accessible to researchers and mathematicians worldwide, allowing them to discover new mathematical formulas relating fundamental constants. The integration with Wolfram Alpha provides additional validation and insights for the discovered formulas.",
      },
    ],
    impact: [
      "Creation of a new heuristic and search space for formula discovery",
      "More robust use of the BOINC infrastructure",
      "Enhanced accessibility for contributing mathematicians",
      "Improved cross-platform support for distributed computing",
    ],
    detailedTechnologies: {
      frontend: [
        { name: "React", url: "https://reactjs.org/" },
        { name: "TypeScript", url: "https://typescriptlang.org/" },
        { name: "MathJax", url: "https://www.mathjax.org/" },
        { name: "D3.js", url: "https://d3js.org/" },
      ],
      backend: [
        { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
        { name: "Python", url: "https://python.org/" },
      ],
      apis: [
        { name: "Wolfram Alpha API", url: "https://wolframalpha.com/api/" },
        { name: "LIReC", url: "https://orca.cardiff.ac.uk/50951/" },
      ],
      distributedComputing: [
        { name: "BOINC", url: "https://boinc.berkeley.edu/" },
        { name: "cx_Freeze", url: "https://cx-freeze.readthedocs.io/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Kokkos Accelerated Machine Learned Interatomic Potential",
    description:
      "Quickly calculating accurate inter-atomic force fields is a primary bottleneck for many molecular dynamics simulations in the chemistry and materials science fields. State-of-the-art approaches like Message Passing Neural Networks (MPNNs) can greatly speed up these types of force field calculations by reducing communication overheads during simulation intervals. However, recent implementations of MPNN, such as MACE, are not fully available to GPU-enabled molecular dynamics simulations. This project focused on a collaborative profiling and porting effort starting with the PI's existing software library for calculations of inter-atomic force fields with MACE/MPNN optimizations, 'sprint C++'. The ideal solution for this project would make use of industry standard libraries and APIs for heterogeneous CPU and GPU computing, such as the Sandia Labs-developed Kokkos performance portability programming model.",
    summary:
      "Development of Sprint-Kokkos, a high-performance library for inter-atomic force field calculations using Kokkos for portable CPU-GPU computing",
    imageUrl: imgKokkosMaceMaterials,
    category: ["computational-science", "material-science"],
    githubUrls: ["https://github.com/wcwitt/symmetrix"],
    demoUrl: [],

    featured: false,
    achievements: [
      "Profiled simulations of interest and shared methodology with researcher",
      "Achieved ~8x performance improvement through optimizations addressing performance bottlenecks",
      "Delivered sprint-kokkos library providing performance portable version of MACE across multiple kinds of GPUs",
      "Implemented high performance, interoperable library using Kokkos with MACE functionality across different CPUs and GPUs",
      "Enabled portable methods for running inter-atomic force field calculations with widely used molecular dynamics frameworks",
      "Code publicly released with 10 beta users and estimated 100+-1000 clones per week on general release",
    ],
    projectDetails: {
      startDate: "April 2024",
      endDate: "November 2024",
      source: "VISS",
      scientificDomain: "Material Science / Computational Chemistry",
      partners: [{ name: "Chuck Witt", profileUrl: "" }],
      softwareEngineers: [{ name: "Ketan Bhardwaj", profileUrl: "https://www.linkedin.com/in/ketanbj/" }],
    },
    goals: [
      "Developing a Kokkos Accelerated Machine Learned Interatomic Potential software library, named Sprint-Kokkos, incorporating Kokkos support for heterogeneous CPU-GPU simulations as well as the researcher's implementation of MACE ('sprint C++') to further accelerate simulations",
      "Profiling and evaluating common simulation scenarios using the baseline approach and compare against Sprint-Kokkos",
      "Enable portable methods for running inter-atomic force field calculations with widely used molecular dynamics frameworks",
    ],
    softwareSolution:
      "During this engagement, we performed the following: We recreated the PI's simulation setup on LAMMPS and performed detailed profiling of the execution of simulation scenarios. We shared our findings and suggestions with PI. We implemented and delivered sprint-kokkos, a high performance, interoperable library implemented using Kokkos which provides MACE functionality across different CPUs and GPUs using OpenMP, NVIDIA's CUDA, and Intel's OneAPI.",
    impact: [
      "The code is publicly included in this repo for general release https://github.com/wcwitt/symmetrix with 10 beta users. Researcher estimates 100+-1000 clones per week on general release",
      "Special mention by PI in pre-print publication and a journal paper in preparation",
      "Achieved significant performance improvements enabling faster molecular dynamics simulations",
      "Provided performance portable solution across multiple GPU architectures",
    ],
    detailedTechnologies: {
      core: [
        { name: "C++", url: "https://cplusplus.com/" },
        { name: "Kokkos", url: "https://kokkos.org/" },
      ],
      computing: [
        { name: "CUDA", url: "https://developer.nvidia.com/cuda-zone" },
        { name: "OpenMP", url: "https://www.openmp.org/" },
        {
          name: "Intel OneAPI",
          url: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/overview.html",
        },
      ],
      profiling: [
        {
          name: "Intel vTune",
          url: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/vtune-profiler.html",
        },
        {
          name: "NVSight",
          url: "https://developer.nvidia.com/nsight-systems",
        },
      ],
      simulation: [
        { name: "LAMMPS", url: "https://www.lammps.org/" },
        { name: "MACE", url: "https://github.com/ACEsuit/mace" },
      ],
    },
    screenshots: [
      {
        url: imgKokkosMaceMaterials,
        alt: "MACE-MP-0 Equivariant Graph Tensor Network materials science diagram",
        caption:
          "MACE-MP-0 Equivariant Graph Tensor Network showing comprehensive materials coverage",
        description:
          "This diagram illustrates the MACE-MP-0 (Materials Accelerated by Computational Engineering - Material Project 0) framework, which is central to the Kokkos-accelerated machine learned interatomic potential project. The visualization shows how MACE-MP-0 serves as an equivariant graph tensor network that can handle diverse material types including ice & water, nanoparticles, amorphous carbon, zeolites, MOFs, cathode materials, carbonates, and many others. The radial design demonstrates the framework's ability to process multiple material categories simultaneously, from simple molecules to complex heterogeneous catalysts, making it ideal for the performance-portable Kokkos implementation that enables efficient molecular dynamics simulations across different CPU and GPU architectures.",
      },
    ],
  },
  {
    id: 6,
    title:
      "Performance Enhancements for Simulations that Target Intrinsically Disordered Proteins (IDPs)",
    description:
      "Meta inferencing is one of the key computational simulation techniques to advance the understanding of treating incurable diseases through understanding interactions of intrinsically disordered proteins (IDPs) with small drug-like molecules. During this engagement, we evaluated the performance characteristics of simulations based on <a href='https://www.gromacs.org/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>GROMACS</a> and <a href='https://www.plumed.org/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>PLUMED</a>, which target IDPs with therapeutic small molecules. After the evaluation, we worked with the PLUMED team to introduce changes that resulted in significant performance improvements for drug discovery research.",
    summary:
      "Performance optimization of GROMACS/PLUMED simulations for drug discovery research targeting intrinsically disordered proteins",
    imageUrl: imgProteinComparison,
    category: ["computational-science", "chemistry-biochemistry"],
    githubUrls: ["https://github.com/plumed/plumed2"],
    demoUrl: [],

    featured: false,
    achievements: [
      "Improved the efficiency of metainference simulations with PLUMED",
      "68% improvement over CPU baseline",
      "53% improvement over GPU baseline",
      "Achieved 2x speedup in execution time through configuration optimization",
      "Profiled multiple simulations, revealing PLUMED is not a significant bottleneck in these simulations",
      "Created experience blog on PLUMED tutorials for broader MD community",
      "Ensured backward compatibility for existing PLUMED simulations",
      "Immediate adoption in production environments with no disruptions",
    ],
    projectDetails: {
      startDate: "May 2023",
      endDate: "September 2023",
      source: "VISS",
      scientificDomain: "Drug discovery, molecular dynamics",
      partners: [
        { name: "Gabi Heller", profileUrl: "" },
        { name: "Thomas Lohr", profileUrl: "" },
      ],
      softwareEngineers: [{ name: "Ketan Bhardwaj", profileUrl: "https://www.linkedin.com/in/ketanbj/" }],
    },
    goals: [
      "Address performance bottlenecks in PLUMED software plugin for GROMACS-based simulations",
      "Evaluate and optimize CUDA version of PLUMED code for GPU acceleration",
      "Accelerate meta inferencing simulations for drug discovery research",
      "Provide researchers with profiling knowledge for future optimization",
    ],
    softwareSolution:
      "During this engagement, we used state-of-the-art software tools and data-driven software engineering to extract and analyze data from researcher provided simulation scenarios by recreating their simulations on our internal research infrastructure. We coordinated with the researchers and the PLUMED team and shared relevant data and insights with both groups, which led the PLUMED team to suggest changes in configuration of PLUMED software in researcher simulations. We implemented these configuration changes and validated the performance improvements through comprehensive profiling.",
    impact: [
      "Detailed profiling information of commonly used simulation scenarios was used to identify performance bottlenecks",
      "Identification and verification of the right configuration parameters for PLUMED in researchers' simulations led to speed up of 2x in execution time",
      "Experience blog on PLUMED tutorials was created for use by the broader MD community",
      "The changes were immediately adopted in researchers' production environments with no disruptions",
      "Researchers gained important knowledge about profiling methods from the VISS team, enabling future optimization of simulation scenarios",
    ],
    screenshots: [
      {
        url: imgProteinComparison,
        alt: "Comparison of structured and disordered proteins",
        caption:
          "Comparison between a structured protein (left) with a well-defined 3D conformation and an intrinsically disordered protein (right) with multiple possible conformations",
        description:
          "The image above illustrates the fundamental difference between structured proteins and Intrinsically Disordered Proteins (IDPs). Structured proteins (left) have a well-defined three-dimensional shape with stable secondary structures like alpha helices and beta sheets (shown in green). In contrast, IDPs (right) lack a stable structure and can adopt multiple conformations, making them more challenging to simulate computationally. This project focused on optimizing [GROMACS](https://www.gromacs.org/) and [PLUMED](https://www.plumed.org/) simulations for these challenging IDPs, particularly in the context of their interactions with small therapeutic molecules (shown in orange). The performance enhancements achieved through this work allow researchers to run more extensive and accurate simulations of these complex protein systems, potentially accelerating drug discovery efforts targeting IDPs.",
      },
    ],
    detailedTechnologies: {
      simulation: [
        { name: "GROMACS", url: "https://www.gromacs.org/" },
        { name: "PLUMED", url: "https://www.plumed.org/" },
      ],
      computing: [
        {
          name: "GPU Computing",
          url: "https://developer.nvidia.com/gpu-computing",
        },
        { name: "CUDA", url: "https://developer.nvidia.com/cuda-zone" },
      ],
      profiling: [
        {
          name: "Intel vTune",
          url: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/vtune-profiler.html",
        },
      ],
      development: [
        {
          name: "Profiling",
          url: "https://en.wikipedia.org/wiki/Profiling_(computer_programming)",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Icetemp: Converting a Jupyter Notebook to a Python Package",
    description:
      "Icetemp is a numerical heat flow model that infers long-term climate and glacial history using Bayesian inversion of in-situ borehole temperature measurements previously taken in Antarctica. During this engagement, we converted the Icetemp algorithm, written as a Jupyter Notebook, into a Python package available on PyPi, complete with automated testing and Continuous Integration / Delivery / Deployment.",
    summary:
      "Created a professionally tested Python library from Jupyter Notebook code",
    imageUrl: imgIcetempAnalysis,
    category: ["data-science", "earth-atmospheric-sciences"],
    githubUrls: ["https://github.com/sashamontelli/borehole_temperature_models"],
    demoUrl: [],

    featured: false,
    achievements: [
      "Multi-platform continuous integration (CI) workflow",
      "Automated tests with comprehensive coverage",
      "Automatic deploys to PyPI",
      "Improved performance of existing model by 20%",
      "Ensured the functionality is open to the science community",
    ],
    projectDetails: {
      startDate: "June 2023",
      endDate: "September 2023",
      source: "VISS",
      scientificDomain: "Glaciology, Thermal Modeling",
      partners: [{ name: "Sasha Montelli", profileUrl: "" }],
      softwareEngineers: [{ name: "Dave Brownell", profileUrl: "https://www.linkedin.com/in/david-brownell-b87921/" }],
    },
    goals: [
      "Increase the code quality and performance of the existing model",
      "Ensure that the functionality is open to the scientific community",
      "Increase usage of the functionality by glaciologists and numerical modelers",
    ],
    softwareSolution:
      "During this engagement, we converted the ice temp algorithm, written as a Jupyter notebook, into a Python package available on PyPi, complete with automated testing and Continuous Integration / Delivery / Deployment via GitHub actions. Ice rises are slow-moving areas of ice adjacent to floating ice shelves. Scientists study temperature patterns inside these ice rises to learn about how they have changed over time and what has influenced them. Influences include past surface temperatures, snowfall levels, and heat from the Earth. While earlier studies looked at one or two of these factors using temperature data from drilled holes, no one has yet explored how all these factors interact.",
    impact: [
      "Introduced a multi-platform Continuous Integration GitHub workflow",
      "Introduced automated tests to exercise the algorithm",
      "Created a Python package for deployment to PyPi",
      "Introduced a Continuous Delivery / Deployment GitHub workflow",
      "Improved performance of the existing model by 20%",
      "Researchers have been able to integrate new probabilistic heat flow models into their Bayesian inversion framework for reconstructing englacial temperature histories",
      "More effectively generate probabilistic estimates of ice-rise grounding age from borehole temperatures, directly advancing their understanding of past ice-sheet dynamics",
    ],
    screenshots: [
      {
        url: imgIcetempAnalysis,
        alt: "Icetemp Bayesian analysis visualization",
        caption:
          "Visualization of Bayesian analysis from Icetemp showing various parameter distributions and relationships",
        description:
          "The image above shows the visualization outputs from the Icetemp model's Bayesian analysis. These plots display various parameter distributions and correlations that help scientists understand Antarctic climate and glacial history from borehole temperature data. The top-right graph shows measured temperature profiles at different depths, while other panels display parameter distributions and relationships derived from the Bayesian inversion process. By converting this analysis from a Jupyter Notebook to a well-tested Python package, our team made these sophisticated Bayesian inversion techniques more accessible to glaciologists and climate scientists. The package now uses modern CI/CD practices, has comprehensive test coverage, and is available through PyPI, making it easier for researchers to incorporate into their scientific workflows.",
      },
    ],
    detailedTechnologies: {
      backend: [{ name: "Python", url: "https://python.org/" }],
      development: [{ name: "Jupyter Notebook", url: "https://jupyter.org/" }],
      distribution: [{ name: "PyPI", url: "https://pypi.org/" }],
      cicd: [
        { name: "CI/CD", url: "https://en.wikipedia.org/wiki/CI/CD" },
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      modeling: [
        {
          name: "Bayesian Modeling",
          url: "https://en.wikipedia.org/wiki/Bayesian_inference",
        },
      ],
    },
  },
  {
    id: 8,
    title: "FastANI",
    description:
      "FastANI is an HPC-oriented Python package to perform whole-genome Average Nucleotide Identity (ANI). FastANI allows for quickly comparing two genomes to find matches in their genetic structure, and the related paper for this package has been cited over 4000 times. During this engagement, center leadership collaborated with Dr. Chockingalim, a research scientist in Dr. Aluru's lab, to improve the quality of the FastANI Python package.",
    summary:
      "Enhanced build system, testing infrastructure, and CI/CD for widely-used genomic analysis tool with 4000+ citations",
    imageUrl: imgFastani,
    category: ["computational-science", "bioinformatics"],
    githubUrls: ["https://github.com/ParBLiSS/FastANI"],
    demoUrl: [],
    featured: false,
    achievements: [
      "Migrated from autotools to CMake build system, enabling development on more platforms",
      "Developed heuristic tests and CI/CD to facilitate future updates",
      "Created GitHub Actions based CI/CD and incorporated CodeCov workflow",
      "Released FastANI 1.34 on GitHub and deployed new package to Bioconda",
      "Achieved 20,000+ downloads since July 2023 release",
      "Enabled external contributors to fix bugs via simple PRs using new CI/CD testing",
    ],
    projectDetails: {
      startDate: "November 2022",
      endDate: "July 2023",
      source: "Internal",
      scientificDomain: "Computational Genomics",
      partners: [
        {
          name: "Srinivas Aluru",
          profileUrl: "",
        },
        {
          name: "Sriram Chockingalim",
          profileUrl: "",
        },
      ],
      softwareEngineers: [
        { name: "Sriram Chockingalim" },
        { name: "Alex Orso" },
        { name: "Jeff Young" },
      ],
    },
    goals: [
      "Make the build process more intuitive for developers and users",
      "Implement automated testing to allow for easier merging of community contributions and bugfixes",
      "Keep API and code compatibility with older versions of the code while releasing a new, updated version of the code",
    ],
    softwareSolution:
      "Since this was already a widely used Python-based project, the focus of the engagement was on improvements that would help the researchers to maintain and sustain the project going forward. To this end, work focused on exploring options for build systems (autotools versus CMake), automated testing frameworks (Jenkins versus GitHub Actions), and code coverage frameworks. Notably, this package previously had limited testing due to the heuristic nature of the ANI search. Discussions with the engineering team led to the implementation and inclusion of a simple heuristic-based test suite that greatly improved code coverage.",
    impact: [
      "FastANI was migrated from autotools to use the CMake build system, allowing for development on more platforms",
      "Developed a heuristic tests and CI/CD to facilitate future updates",
      "Created GitHub Actions based CI/CD and incorporated CodeCov workflow to check code coverage",
      "Released a new version of FastANI on GitHub and deployed a new package to Bioconda",
      "The resulting FastANI 1.34 release was posted on Bioconda and has received 20,000 downloads since its release in July 2023",
      "Within weeks of the new release, external contributors helped to fix a small bug in the test cases via a simple PR, which utilized the new CI/CD testing and code coverage plugins",
    ],
    screenshots: [
      {
        url: imgFastani,
        alt: "FastANI genomic comparison visualization",
        caption:
          "Visualization of genome comparison between two bacterial strains (B. quintana and B. henselae) using FastANI",
        description:
          "The image above demonstrates FastANI's genomic comparison capabilities. It shows a visualization of the genomic similarity between two bacterial strains: *Bartonella quintana* (top) and *Bartonella henselae* (bottom). The colored regions represent matching genomic fragments, with pink lines connecting homologous regions between the two genomes. The color gradient (from purple to yellow) indicates the similarity level, with yellow representing higher nucleotide identity. Our work on the FastANI Python package improved the code quality, testing infrastructure, and build system, making this powerful genomic analysis tool more reliable and maintainable for bioinformatics researchers. By enhancing the software engineering aspects of FastANI, we've helped ensure that scientists can confidently use this tool for rapid whole-genome comparisons in various research contexts.",
      },
    ],
    detailedTechnologies: {
      backend: [{ name: "Python", url: "https://python.org/" }],
      computing: [
        {
          name: "HPC",
          url: "https://en.wikipedia.org/wiki/High-performance_computing",
        },
        {
          name: "OpenMP",
          url: "https://www.openmp.org/",
        },
      ],
      development: [{ name: "CMake", url: "https://cmake.org/" }],
      cicd: [
        { name: "CI/CD", url: "https://en.wikipedia.org/wiki/CI/CD" },
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      testing: [{ name: "CodeCov", url: "https://codecov.io/" }],
      bioinformatics: [
        { name: "Genomics", url: "https://en.wikipedia.org/wiki/Genomics" },
      ],
    },
  },
  {
    id: 9,
    title: "Hi-Fi Grid Engagement",
    description:
      "Applying Reinforcement Learning (RL) to automate operations and drive discoveries in power grids is an important area of research that has a direct impact on power delivery across world's power grids. However, applying RL in power grid systems is especially challenging given the large-scale nature of power-grid data. The scale of these data sets causes scalability and performance challenges for RL approaches. RL2Grid is a suite that simulates the use of RL in realistic power-grid systems by using a software stack that includes the <a href='https://github.com/Grid2op/grid2op' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Grid2Op</a> power control framework running with Gymnasium, an open source framework for RL research.",
    summary:
      "Optimized RL2Grid simulations through performance profiling and high-fidelity power models, achieving 2x+ speed improvements and 20x scalability",
    imageUrl: imgRl2Grid,
    category: ["computational-science", "electrical-engineering"],
    githubUrls: ["https://github.com/Grid2op/grid2op"],
    demoUrl: ["https://grid2op.readthedocs.io/en/latest/"],

    featured: false,
    achievements: [
      "Engaged with PI to recreate RL2Grid simulation environment for detailed performance and scalability profiling",
      "Implemented python multi-processing and shared memory-based dictionary optimizations for Grid2Op",
      "Delivered PowerModels.jl-based python backend for Grid2Op enabling high-fidelity simulations",
      "Achieved 2x+ faster simulation performance and 20x scalability improvements",
      "Transformed simulation runtime from weeks to days, enabling more scientific experimentation",
      "Enhanced simulation fidelity with higher-quality power models for realistic power-grid studies",
    ],
    projectDetails: {
      startDate: "November 2024",
      endDate: "April 2025",
      source: "VISS",
      scientificDomain: "PowerGrid / ML",
      partners: [
        { name: "Priya Donti", profileUrl: "" },
        { name: "Enrico Marchesini", profileUrl: "" },
        { name: "Benjamin Donnot", profileUrl: "" },
      ],
      softwareEngineers: [
        { name: "Ketan Bhardwaj", profileUrl: "https://www.linkedin.com/in/ketanbj/" },
        { name: "Lori A. Burns", profileUrl: "https://www.linkedin.com/in/lori-burns-02766740/" },
      ],
    },
    goals: [
      "Optimize the performance and scalability of Grid2Op based simulations to enable partners to explore RL agent operations on long-running, large-scale power-grid systems simulations",
      "Enhance the fidelity and accuracy of RL2Grid simulations by adding support for high-fidelity power models, such as PowerModels.jl",
      "Address performance bottlenecks that caused initial simulations to take weeks to finish due to lack of parallel execution",
    ],
    softwareSolution:
      "During this engagement, we performed the following: Engaged with the PI to recreate the environment needed to run RL2Grid simulation on our end to conduct detailed performance and scalability profiling. We shared our findings and suggestions with partners; the resulting optimizations i.e., use of python multi-processing and shared memory-based dictionary to store large power-grid states in Grid2Op enabled simulations to run faster & scale well. Delivered a python package GitHub repository for a Grid2Op backend that uses PowerModels.jl to enable partners to run high-fidelity simulations.",
    impact: [
      "After VISS engagement, RL2Grid simulations ran 2x+ faster and scaled to 20x more instances",
      "Delivered PowerModels based python packaged backend for Grid2Op (https://github.com/MOSSLab-MIT/PandaModelsBackend), which allows for higher fidelity RL2Grid simulations",
      "RL2Grid simulations that took weeks before the engagement now run in days, enabling more scientific experimentation in less time",
      "Simulations can be run with higher fidelity models, allowing for more realistic power-grid studies",
    ],
    screenshots: [
      {
        url: imgRl2GridPerformance,
        alt: "RL2Grid power grid simulation interface",
        caption:
          "Left: Performance profiling visualization showing execution times for different components. Right: Architecture diagram showing the integration of Grid2op with PowerModels.jl, pandapower, and other related libraries.",
        description:
          "This visualization demonstrates the RL2Grid simulation environment that uses the Grid2Op power control framework running with Gymnasium for reinforcement learning research in power grid operations. The interface shows how RL agents interact with realistic power grid systems to devise flexible control strategies for modern power grids. Through our performance optimization work, these simulations now run 2x+ faster and scale to 20x more instances, transforming experiment runtime from weeks to days. The integration with PowerModels.jl enables high-fidelity simulations that provide more realistic power-grid studies for researchers exploring automated power grid operations and discoveries.",
      },
    ],
    detailedTechnologies: {
      backend: [
        { name: "Python", url: "https://python.org/" },
        { name: "Julia", url: "https://julialang.org/" },
      ],
      machineLearning: [
        {
          name: "Machine Learning",
          url: "https://en.wikipedia.org/wiki/Machine_learning",
        },
      ],
      simulation: [
        {
          name: "Power Grid Simulation",
          url: "https://grid2op.readthedocs.io/",
        },
      ],
      profiling: [
        { name: "Py-Spy", url: "https://github.com/benfred/py-spy" },
        { name: "speedscope", url: "https://speedscope.app/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      optimization: [
        {
          name: "Performance Optimization",
          url: "https://en.wikipedia.org/wiki/Performance_optimization",
        },
      ],
    },
  },
  {
    id: 10,
    title: "QCSchema v2: Next-Generation Structured Data for Quantum Chemistry",
    description:
      "QCSchema is a standardized data format for representing quantum chemistry computations, originally developed by the Molecular Sciences Software Institute (MolSSI). It facilitates interoperability across software by defining structured input and output for basic computations such as total energy or gradients and by tracking software provenance. QCSchema is implemented as Pydantic classes in the Python module QCElemental. Another module, QCEngine, is a QCSchema I/O runner for over twenty full-featured or specialized computational molecular sciences codes. Together, these serve as part of the software stack for several research projects.  ",
    summary:
      "Modernized data schema for quantum chemistry computations and procedures",
    imageUrl: imgQcSchema,
    category: ["computational-science", "chemistry"],
    githubUrls: ["https://github.com/MolSSI/QCElemental/"],
    demoUrl: ["https://molssi.org/software/qcarchive/"],
    featured: false,
    achievements: [
      "Updated schema expression from Pydantic v1 API to v2 to unblock downstream projects",
      "Implemented data layout changes to make schema more composable, reusable, and intuitive",
      "Made old and new schema concurrently tested and available from the same package to facilitate adoption and maintenance",
      "QCSchema is now ready to add community-requested features",
    ],
    projectDetails: {
      startDate: "August 2024",
      endDate: "December 2024",
      source: "Georgia Tech",
      scientificDomain: "Quantum Chemistry",
      partners: [
        { name: "David Sherrill (Georgia Tech)", profileUrl: "" },
        {
          name: "Ben Pritchard (The Molecular Sciences Software Institute)",
          profileUrl: "",
        },
      ],
      softwareEngineers: [{ name: "Lori A. Burns", profileUrl: "" }],
    },
    goals: [
      "Implement and test a modestly redesigned v2 QCSchema expressed in a new API and using an improved data layout for modularity and predictability",
      "Ensure concurrent access to both v1 and v2 schemas to allow seamless transition downstream and facilitate adoption and maintenance",
    ],
    softwareSolution:
      "During this engagement, we modernized QCSchema by implementing a next-generation schema architecture (v2) while preserving access to the longstanding v1 models. Because QCSchema models are deeply nested and widely reused across multiple software projects, the transition from Pydantic v1 to v2 was non-trivial—these APIs are incompatible and cannot be mixed—making an abrupt switch infeasible without risking disruption to the broader ecosystem. To resolve this, we separated v1 and v2 models into distinct namespaces within QCElemental, allowing users to import and use either version as needed. We also refactored the schema's internal structure to reduce redundancy and improve composability, transitioning from inheritance-heavy models to a cleaner, more modular design based on community planning. This required substantial changes to model definitions, the addition of version-aware conversion functions, and updates to QCEngine's internal execution paths to support both versions. Continuous integration tests were expanded to ensure parity and stability across the dual-version system.",
    impact: [
      "QCElemental 'next' branch and alpha release",
      "QCEngine 'next' branch and alpha release",
      "Presentation on future utility of QCSchema for related domain scientists at JuliaMolSim workshop",
      "Draft pull requests for adoption at Psi4 and QCManyBody repositories",
      "Unblocked downstream projects (QCArchive, Psi4, OpenForceField) wanting to use Pydantic v2 API",
      "Laid foundation for new features and schema models requested by the community",
      "Enabled two grant proposals to assume the presence of a ready-for-development v2 base",
    ],
    screenshots: [
      {
        url: imgQcSchema,
        alt: "QCSchema v1 vs v2 architecture visualization",
        caption:
          "Side-by-side comparison of QCSchema v1 and v2 architecture, showing the improved structure and organization in v2",
        description:
          "The image above illustrates the architectural improvements in QCSchema v2 compared to v1. The new schema architecture is more composable, reusable, and intuitive, with clearer data organization and relationships between components. The diagram shows how the different modules and components of the schema interact with each other, providing a comprehensive view of the quantum chemistry data structure. By updating the schema expression from Pydantic v1 API to v2, we unblocked downstream projects that were dependent on these modernizations. The new structure makes it easier for quantum chemistry researchers to maintain and extend the schema, while maintaining backward compatibility with existing implementations.",
      },
    ],
    detailedTechnologies: {
      backend: [{ name: "Python", url: "https://python.org/" }],
      framework: [{ name: "Pydantic", url: "https://pydantic.dev/" }],
      dataStructures: [
        {
          name: "Schema Design",
          url: "https://en.wikipedia.org/wiki/Database_schema",
        },
        { name: "JSON Schema", url: "https://json-schema.org/" },
        {
          name: "QCElemental",
          url: "https://github.com/MolSSI/QCElemental/",
        },
        { name: "QCEngine", url: "https://github.com/MolSSI/QCEngine/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      science: [
        {
          name: "Quantum Chemistry",
          url: "https://en.wikipedia.org/wiki/Quantum_chemistry",
        },
      ],
    },
  },
  {
    id: 11,
    title: "CoAuthor",
    description:
      "CoAuthor is an intelligent writing assistant designed to go beyond traditional autocomplete tools by recognizing and responding to user behavioral and cognitive patterns during the writing process. By analyzing how individuals write—such as pauses, edits, and revision styles—CoAuthor provides more personalized and context-aware writing support. In addition to assisting writers, CoAuthor serves as a research platform. It allows behavioral scientists and HCI researchers to define custom patterns of interest and specify corresponding interventions. This flexibility enables experiments on how different types of feedback affect the writing process, offering a new tool for studying cognitive behavior through digital text interaction.",
    summary:
      "Intelligent writing assistant that recognizes behavioral patterns and serves as a research platform for studying cognitive behavior through digital text interaction",
    imageUrl: imgCoAuthorScreenshot,
    category: ["ai-ml", "human-computer-interaction"],
    githubUrls: ["https://github.com/yang-qian/thought-toolkit"],
    demoUrl: ["https://coauthor.stanford.edu/"],
    featured: false,
    achievements: [
      "Developed modular, extensible codebase enabling rapid development of new behavioral pattern detectors",
      "Created comprehensive developer documentation to guide researchers in creating and deploying custom patterns",
      "Implemented automated CI pipeline with scheduled testing to catch issues early",
      "Improved system security through dependency upgrades and modern package management",
      "Simplified the process for researchers to integrate their own behavioral pattern detectors",
      "Enhanced configurability for selecting which user behavioral patterns to track during writing sessions",
    ],
    projectDetails: {
      startDate: "March 2025",
      endDate: "June 2025",
      source: "VISS",
      scientificDomain: "Human-Computer Interaction",
      partners: [
        { name: "Qian Yang", profileUrl: "" },
        { name: "Talia Wise", profileUrl: "" },
      ],
      softwareEngineers: [
        { name: "Varun Narayan", profileUrl: "" },
        {
          name: "Robin Fiévet",
          profileUrl: "https://www.linkedin.com/in/robin-fievet-6189a431/",
        },
      ],
    },
    goals: [
      "Simplify the process for researchers to integrate their own behavioral pattern detectors into CoAuthor",
      "Improve configurability for selecting which user behavioral patterns to track during a writing session",
      "Ensure long-term maintainability and extensibility of the codebase for new developers and research contributors",
    ],
    softwareSolution:
      "The CoAuthor codebase was refactored to adopt a modular architecture that clearly separates behavioral pattern detection logic from the core system. Researchers can now define new behavioral patterns through a standardized interface and easily configure which patterns to monitor. To ensure software quality and ease of collaboration, modern software engineering practices were introduced, including unit and integration tests, GitHub Actions for CI/CD, and uv for secure and consistent dependency management. This rework also addressed previous security vulnerabilities.",
    impact: [
      "CoAuthor is an ongoing project, but we anticipate that the impact would be that researchers are able to more effectively run CoAuthor writing studies, perform more detailed analysis of the resultant writing logs, and easily add new plugins to study new writing behaviors",
      "Enables experiments on how different types of feedback affect the writing process",
      "Provides new tool for studying cognitive behavior through digital text interaction",
      "Facilitates behavioral science and HCI research through customizable pattern detection",
    ],
    detailedTechnologies: {
      backend: [
        { name: "Flask", url: "https://flask.palletsprojects.com/" },
        { name: "Python", url: "https://python.org/" },
      ],
      frontend: [
        {
          name: "HTML/CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        { name: "Quill.js", url: "https://quilljs.com/" },
        { name: "jQuery", url: "https://jquery.com/" },
      ],
      ai: [
        { name: "OpenAI API", url: "https://openai.com/api/" },
        { name: "spaCy", url: "https://spacy.io/" },
        { name: "NLTK", url: "https://www.nltk.org/" },
      ],
      development: [
        { name: "uv", url: "https://docs.astral.sh/uv/" },
        { name: "pytest", url: "https://pytest.org/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
    },
    screenshots: [
      {
        url: imgCoauthorDemo,
        alt: "CoAuthor interface demonstration",
        caption:
          "CoAuthor interface showing real-time writing assistance and behavioral pattern detection",
        description:
          "This demonstration shows CoAuthor's intelligent writing assistant in action. The interface tracks user behavioral patterns during the writing process, such as pauses, edits, and revision styles, to provide personalized and context-aware writing support. This real-time feedback system enables researchers to study cognitive behavior through digital text interaction while assisting writers with more intelligent autocomplete and writing suggestions.",
      },
    ],
  },
  {
    id: 12,
    title: "Psi4 v1.10 Release",
    description:
      "Psi4 is a widely used open-source quantum chemistry package that integrates hundreds of approximation methods into a unified framework with a Python interface. This project focused on releasing v1.10 with new methods, bug fixes, and improvements accumulated since the February 2024 v1.9.1 release. The work involved processing academic developers' pull requests, fixing bugs in both Psi4 and continuous integration environments, and contributing user-requested features. The release includes relativistic integrals, resolution-of-the-identity improvements, London dispersion corrections, explicitly correlated methods, and possibly the first implementation of a domain-based local pair natural orbital method outside the Orca program.",
    summary:
      "Official release of Psi4 v1.10 quantum chemistry package with new methods, bug fixes, and improved interfaces",
    imageUrl: imgPsi4,
    category: ["chemistry", "computational-science"],
    githubUrls: ["https://github.com/psi4/psi4"],
    demoUrl: [],
    featured: false,
    achievements: [
      "Integrated new quantum chemistry methods including relativistic integrals",
      "Updated interfaces with external dependencies and programs",
      "Adopted C++20 standard and CMake v4.0 compatibility",
      "Expanded conda binary builds for Linux ARM64 architecture",
      "Simplified installation process with conda install psi4 -c conda-forge",
    ],
    projectDetails: {
      startDate: "April 2025",
      endDate: "June 2025",
      source: "Georgia Tech",
      scientificDomain: "Quantum Chemistry",
      partners: [
        {
          name: "David Sherrill",
          profileUrl: "",
        },
        {
          name: "Daniel Crawford",
          profileUrl: "",
        },
      ],
      softwareEngineers: [{ name: "Lori Burns", profileUrl: "" }],
    },
    goals: [
      "Integrate proposed changes, implementations of new journal-published QC methods, and bug fixes accumulated since the February 2024 v1.9.1 release",
      "Process academic developers' pull requests with content and efficiency corrections",
      "Ensure testing and documentation requirements are met",
      "Make access as intuitive as possible for accustomed Psi4 users",
    ],
    softwareSolution:
      "During this engagement, we processed academic developers' pull requests by suggesting content and efficiency corrections, requiring that testing and documentation be present, and ensuring that access is as intuitive as possible for accustomed Psi4 users. We also contributed numerous pull requests fixing Psi4 bugs, fixing continuous integration environment bugs, and contributing user-requested features. Additionally, we updated interfaces with external dependencies that provide new capabilities and improved performance.",
    impact: [
      "New methods and scientific capabilities, including relativistic integrals, resolution-of-the-identity-like improvements, London dispersion corrections for an intermolecular decomposition method, reintroduction of explicitly correlated methods, and possibly the first implementation of a domain-based local pair natural orbital method outside the Orca program",
      "Updated and expanded interfaces to external programs, including a new linearly-scaled exchange matrix program with GPU acceleration, formal transition to an official upstream integral library release, possibly an interface to a new self-consistent field orbital solver, an interface to a replacement many-body expansion of molecular clusters program, and general updates to upstream dependencies",
      "Development and distribution improvements, including adopting the C++20 standard, CMake v4.0 compatibility, expanded conda binary builds for Linux ARM64 architecture, and a simple conda install psi4 -c conda-forge install without workarounds",
      "Bug fixes, efficiency improvement, and user requests addressed",
      "Considerable downstream use in academia, education, and industry with complex software stacks requiring official releases to take advantage of new features and fixes",
    ],
    detailedTechnologies: {
      core: [
        { name: "C++", url: "https://isocpp.org/" },
        { name: "Python", url: "https://python.org/" },
      ],
      development: [
        { name: "CMake", url: "https://cmake.org/" },
        { name: "pytest", url: "https://pytest.org/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      documentation: ["Sphinx"],
      computing: ["GPU Computing"],
      scienceSpecific: ["Quantum Chemistry"],
    },
    screenshots: [
      {
        url: imgPsi4Screenshot,
        alt: "Psi4 Ecosystem c. 2025 - Comprehensive network diagram showing upstream and downstream dependencies",
        caption:
          "Psi4 Ecosystem c. 2025 - Network diagram showing the complex interconnections between Psi4 and its upstream/downstream dependencies",
        description:
          "Psi4 Ecosystem c. 2025 - Network diagram showing the complex interconnections between Psi4 and its upstream/downstream dependencies This comprehensive ecosystem diagram illustrates Psi4's position in the landscape of reusable quantum chemistry software projects as of 2025. The diagram shows Psi4 at the center (in orange) with its extensive network of upstream dependencies (mostly optional libraries and tools that Psi4 can use) and downstream connections (programs that use Psi4's capabilities). The upstream section includes fundamental libraries like Python, NumPy, and specialized quantum chemistry tools, while the downstream section shows how Psi4 integrates with workflow managers, databases, post-processing components, and other computational chemistry libraries. This ecosystem view demonstrates the collaborative nature of scientific software development and highlights Psi4's role as both a consumer of foundational tools and a provider of quantum chemistry capabilities to the broader scientific community.",
      },
    ],
  },
  {
    id: 13,
    title: "XTribs Engagement",
    description:
      "The triangulated irregular network (TIN)-based Real-time Integrated Basin Simulator (tRIBS) simulates the interactions between hydrological, ecological, and geomorphic processes occurring on complex land surfaces. Despite its success as a research tool (100+ publications with 4000 citations), it has not yet been deployed for its original goal as a production tool for mitigating hydrometeorological and geomorphic hazards. This engagement focused on delivering performance improvements, better test coverage, and general software engineering best practices to the GT-landslide simulation as run with the GT version of tRIBS (GT-tRIBS).",
    summary:
      "Performance optimization and software engineering improvements for landslide simulation achieving 2x speedup",
    imageUrl: imgXtribsScreenshot,
    category: ["computational-science", "earth-atmospheric-sciences"],
    githubUrls: ["https://github.com/mevrens/tRIBS-GT-SSE"],
    demoUrl: [],
    featured: false,
    achievements: [
      "2x faster GT-landslide simulations demonstrated to researchers",
      "Delivered accelerated tRIBS (xTRIBS) code base repository to researchers",
      "Greatly improved speed of GT-Landslide simulations enabled researchers to generate critical data",
      "Added test cases and basic code coverage to the repository",
      "Designed function cache for transparent acceleration of key calculations",
    ],
    projectDetails: {
      startDate: "November 2023",
      endDate: "May 2024",
      source: "Georgia Tech",
      scientificDomain: "Hydrology, Ecology",
      partners: [
        { name: "Rafael Bras", profileUrl: "" },
        { name: "Evren Soylu", profileUrl: "" },
        { name: "Elisa Arnone", profileUrl: "" },
      ],
      softwareEngineers: [{ name: "Ketan Bhardwaj", profileUrl: "https://www.linkedin.com/in/ketanbj/" }],
    },
    goals: [
      "Deliver performance improvements to GT-tRIBS landslide simulation",
      "Improve test coverage and implement software engineering best practices",
      "Address multi-stakeholder, multi-variant software stack challenges",
      "Maximize codebase performance, test coverage, and compatibility",
    ],
    softwareSolution:
      "During this engagement, we used software engineering tools to set up the landslide simulations at our end and to add test cases and basic code coverage to the repository. We then analyzed the codebase in detail for potential code-level structural issues and profiled execution of GT-tRIBS for the GT landslide simulation. This analysis uncovered a hidden performance bottleneck that was causing significant slowdown due to repeated calculations of the same physical phenomena. To address performance bottlenecks, we designed a function cache which provided a transparent acceleration of key calculations with the existing GT-tRIBS codebase.",
    impact: [
      "2x faster GT-landslide simulations demonstrated to researchers",
      "Delivered accelerated tRIBS (xTRIBS) code base repository to researchers",
      "Greatly improved speed of GT-Landslide simulations enabled researchers to generate critical data for their ongoing project on landslide simulation",
      "Added comprehensive test cases and basic code coverage to improve software reliability",
      "Identified and resolved hidden performance bottlenecks through detailed code analysis and profiling",
      "Implemented function cache for transparent acceleration of key calculations",
    ],
    screenshots: [
      {
        url: imgXtribsScreenshot,
        alt: "Landslide simulation visualization",
        caption:
          "Visualization of landslide simulation results from the optimized GT-tRIBS system",
        description:
          "This visualization represents the type of landslide simulations optimized during the XTribs engagement. The triangulated irregular network (TIN)-based Real-time Integrated Basin Simulator (tRIBS) simulates complex interactions between hydrological, ecological, and geomorphic processes on land surfaces. Our optimization work focused on accelerating these computationally intensive simulations through detailed code analysis, profiling, and implementation of function caching. The 2x performance improvement achieved allows researchers to generate critical data more efficiently for their ongoing landslide simulation projects.",
      },
    ],
    detailedTechnologies: {
      core: [{ name: "C++", url: "https://isocpp.org/" }],
      development: [
        { name: "g++", url: "https://gcc.gnu.org/" },
        { name: "Doxygen", url: "https://www.doxygen.nl/" },
        { name: "Dot", url: "https://graphviz.org/" },
      ],
      profiling: [
        {
          name: "Intel vTune",
          url: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/vtune-profiler.html",
        },
      ],
      simulation: [
        {
          name: "tRIBS",
          url: "https://github.com/mevrens/tRIBS-GT-SSE",
        },
      ],
    },
  },
  {
    id: 14,
    title: "Library of Integer Relations and Constants (LIReC)",
    description:
      "LIReC (Library of Integer Relations and Constants) is an open-source Python library that automates the discovery of exact algebraic relations among high-precision numerical constants using PSLQ-based algorithms. Traditionally, running large-scale searches for integer relations has required custom HPC setups or AWS-centric pipelines. This engagement extended LIReC's reach by porting its core compute routines to the BOINC distributed-computing framework, enabling volunteer computing resources and reducing cloud costs while broadening compute capacity for mathematical research.",
    summary:
      "BOINC integration for distributed mathematical computation enabling volunteer computing for integer relation discovery",
    imageUrl: imgLirec,
    category: ["data-science", "computational-science"],
    githubUrls: ["https://github.com/RamanujanMachine/LIReC"],
    demoUrl: [],
    featured: false,
    achievements: [
      "Created a forked LIReC repository with a BOINC integration layer",
      "Migrated AWS S3 bucket tasks into BOINC work units, enabling seamless job distribution",
      "Authored comprehensive BOINC deployment documentation in the README",
      "Streamlined releases with automated CI/CD, minimizing manual errors and accelerating iteration",
      "Enabled LIReC to harness volunteer and institutional BOINC resources",
    ],
    projectDetails: {
      startDate: "June 2024",
      endDate: "October 2024",
      source: "VISS",
      scientificDomain:
        "Computational Mathematics / Numeric Relation Discovery",
      partners: [
        { name: "Ido Kaminer", profileUrl: "" },
        { name: "Itay Beit Halachmi", profileUrl: "" },
      ],
      softwareEngineers: [
        {
          name: "Robin Fiévet",
          profileUrl: "https://www.linkedin.com/in/robin-fievet-6189a431/",
        },
      ],
    },
    goals: [
      "Automate build, bundle, and deployment steps via CI pipelines to ensure reproducible releases",
      "Provide clear, versioned documentation on BOINC setup and LIReC usage",
      "Deploy LIReC's core calculation engine on BOINC to leverage distributed compute resources",
    ],
    softwareSolution:
      "We forked the upstream RamanujanMachine/LIReC repository and established a dedicated gt-sse-center/LIReC project. A new boinc/ directory contains wrapper scripts and configuration for BOINC-based job submission. Two Python CLI tools, run_lirec.py and run_jobs.py, were enhanced with structured logging and retry logic to manage BOINC work units. The setup.py packaging script was extended to support both local installation and containerized builds. We configured GitHub Actions workflows for automated testing, building, and deployment.",
    impact: [
      "Enabled LIReC to harness volunteer and institutional BOINC resources, reducing cloud costs and broadening compute capacity",
      "Provided the PIs a turnkey BOINC pipeline to run large-scale integer-relation searches",
      "Created a forked LIReC repository with a BOINC integration layer",
      "Migrated AWS S3 bucket tasks into BOINC work units, enabling seamless job distribution",
      "Authored comprehensive BOINC deployment documentation in the README",
      "Streamlined releases with automated CI/CD, minimizing manual errors and accelerating iteration",
    ],
    screenshots: [
      {
        url: imgLirecScreenshot,
        alt: "BOINC application management interface showing LIReC integration",
        caption:
          "BOINC application management interface showing successful LIReC integration with 'LIReC using BOINC instead of AWS' entry",
        description:
          "This screenshot shows the BOINC application management interface from The Ramanujan Machine project, demonstrating the successful integration of LIReC with the BOINC distributed computing platform. The interface displays various applications including the key 'LIReC using BOINC instead of AWS' entry (ID: 7), which represents our successful migration from expensive cloud infrastructure to volunteer computing resources. This integration allows researchers to perform large-scale searches for integer relations among mathematical constants by leveraging distributed computing power from volunteer networks, significantly reducing computational costs while increasing accessibility to high-performance computing for mathematical research.",
      },
    ],
    detailedTechnologies: {
      backend: [{ name: "Python", url: "https://python.org/" }],
      distributedComputing: [
        { name: "BOINC", url: "https://boinc.berkeley.edu/" },
        { name: "cx_Freeze", url: "https://cx-freeze.readthedocs.io/" },
      ],
      cicd: [
        { name: "CI/CD", url: "https://en.wikipedia.org/wiki/CI/CD" },
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      apis: [{ name: "LIReC", url: "https://github.com/RamanujanMachine/LIReC" }],
    },
    references: [
      'H. R. P. Ferguson, D. H. Bailey, and S. Arno, "Analysis of PSLQ, an integer relation finding algorithm," Mathematics of Computation, vol. 68, no. 225, pp. 351–369, 1999.',
      'D. P. Anderson, "BOINC: A System for Public-Resource Computing and Storage," in Proceedings of the 5th IEEE/ACM International Workshop on Grid Computing, 2004.',
    ],
  },
  {
    id: 16,
    title: "IRIS: Intelligently Reinforced Image Segmentation",
    description:
      "IRIS (Intelligently Reinforced Image Segmentation) is an open-source, web-based platform for manual and AI-assisted annotation of satellite imagery, designed to accelerate the creation of machine learning training datasets for Earth Observation. Researchers working with multi-spectral satellite data often rely on fragmented tooling or manual workflows that slow down annotation and limit collaboration. IRIS provides a unified browser-based environment for pixel-level annotation with AI assistance (gradient boosted decision trees), multi-user collaboration with automatic mask merging, configurable multi-spectral views, and a modern administrative interface.\n\nThe IRIS project (<a href='https://github.com/ESA-PhiLab/iris' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>ESA-PhiLab, v0.5</a>) was a functional but aging Flask and vanilla JavaScript application with no CI pipeline, no automated tests, and a legacy command-line interface. Over 276 commits across two repositories and six months of work (October 2025 – March 2026), the team modernized the entire stack, making IRIS maintainable, testable, and extensible, while preserving full backward compatibility with existing project data and workflows. A standalone marketing landing page was also built to give the project a public-facing presence for potential users and stakeholders.",
    summary:
      "Open-source web platform for AI-assisted satellite image annotation, modernized with comprehensive testing, CI/CD, and a redesigned interface",
    imageUrl: imgIrisThumbnail,
    category: ["ai-ml", "earth-atmospheric-sciences"],
    githubUrls: ["https://github.com/gt-csse/iris"],
    demoUrl: [],
    featured: false,
    achievements: [
      "Delivered a fully modernized platform with 276 commits across two repositories over 6 months, touching 274 files with ~55,100 lines added, without breaking backward compatibility with existing project data",
      "Built a comprehensive test suite from scratch: 28 backend pytest files (~5,100 lines), 67 frontend Vitest unit test files (~8,500 lines), and 3 Cypress E2E test files (~470 lines), totaling ~14,100 lines across 98 test files",
      "Introduced CI/CD automation and pre-commit hooks where none existed, with 6 GitHub Actions workflow and config files",
      "Shipped over 10 new user-facing features improving the annotation, export, collaboration, and administration workflows",
      "Identified and patched a privilege escalation vulnerability with dedicated regression tests; hardened user configuration validation and band expression evaluation",
      "Formalized the development process with PR templates and automated code quality enforcement",
      "Delivered a standalone marketing landing page for project visibility and outreach",
    ],
    goals: [
      "Modernize the legacy codebase into a maintainable, modern platform that future contributors can confidently extend without risk of regressions",
      "Introduce comprehensive automated testing and continuous integration where none existed, covering backend logic, frontend components, and end-to-end user workflows",
      "Improve the annotation workflow with new user-facing features such as password management, bulk data export, collaborative discussion tools, and enhanced drawing and visualization controls",
      "Harden the application's security posture by identifying and patching vulnerabilities, adding input validation, and integrating automated security scanning into the development pipeline",
      "Build a polished landing page to showcase IRIS capabilities to the Earth Observation research community",
    ],
    softwareSolution:
      "The admin and segmentation interfaces were incrementally rewritten as modern single-page applications with TypeScript, React-based state management, and client-side routing, while a legacy bridge maintained backward compatibility with the existing canvas-based annotation system throughout the transition. The admin interface gained a complete in-browser project configuration editor with real-time validation and backup/rollback safety. The segmentation interface was rebuilt with a new page layout, redesigned toolbar and status bar, all application modals, a tabbed preferences system, custom icons, and a theme/colorscheme system with a modern dark visual redesign. New features were shipped including a password reset flow with admin approval, bulk and per-user GeoTIFF mask export, a per-image chat panel, configurable paintbrush tools, contrast/brightness controls, a searchable image navigator, side-by-side viewer comparison, improved undo/redo, and a full React-based viewport manager replacing the legacy viewer.\n\nThe build system was migrated to modern Python packaging with <a href='https://docs.astral.sh/uv/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>UV</a> and a <a href='https://vite.dev/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Vite</a> frontend pipeline with TypeScript strict mode and multi-entry bundling. The CLI was rewritten with <a href='https://typer.tiangolo.com/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Typer</a> for type-safe commands and CI-friendly non-interactive operation. A comprehensive GitHub Actions CI/CD pipeline was introduced with linting, security scanning, and pre-commit hooks. A standalone marketing website was built from scratch with React 19, Tailwind CSS, and Framer Motion.",
    impact: [
      "Enabled the project to be maintained and extended by future contributors through modern tooling, comprehensive tests, and CI/CD, significantly reducing the risk of regressions",
      "Improved annotation workflow efficiency for Earth Observation researchers with searchable navigation, configurable brushes, AI preferences, bulk export, and a redesigned interface",
      "Strengthened the application's security posture with automated scanning (Bandit, TruffleHog), privilege escalation fixes, user config validation hardening, and band expression forbidden token checking",
      "Gave the project a public-facing presence through the IRIS Landing page, supporting outreach to potential users and stakeholders in the Earth Observation community",
    ],
    detailedTechnologies: {
      backend: [
        { name: "Python", url: "https://www.python.org/" },
        { name: "Flask", url: "https://flask.palletsprojects.com/" },
        { name: "rasterio", url: "https://rasterio.readthedocs.io/" },
        { name: "scikit-image", url: "https://scikit-image.org/" },
        { name: "LightGBM", url: "https://lightgbm.readthedocs.io/" },
      ],
      frontend: [
        { name: "React", url: "https://react.dev/" },
        { name: "TypeScript", url: "https://www.typescriptlang.org/" },
        { name: "Zustand", url: "https://zustand.docs.pmnd.rs/" },
        { name: "Vite", url: "https://vite.dev/" },
      ],
      landingPage: [
        { name: "React 19", url: "https://react.dev/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
        { name: "Framer Motion", url: "https://motion.dev/" },
      ],
      testing: [
        { name: "pytest", url: "https://docs.pytest.org/" },
        { name: "Vitest", url: "https://vitest.dev/" },
        { name: "Cypress", url: "https://www.cypress.io/" },
      ],
      cicd: [
        { name: "GitHub Actions", url: "https://github.com/features/actions" },
        { name: "Bandit", url: "https://bandit.readthedocs.io/" },
      ],
      cli: [
        { name: "Typer", url: "https://typer.tiangolo.com/" },
      ],
      packageManagement: [
        { name: "UV", url: "https://docs.astral.sh/uv/" },
      ],
    },
    projectDetails: {
      startDate: "October 2025",
      endDate: "March 2026",
      source: "VISS",
      scientificDomain: "Earth Observation / Satellite Image Segmentation",
      partners: [
        { name: "Jacqueline Campbell (Principal Investigator)", profileUrl: "" },
        { name: "Alistair Francis", profileUrl: "" },
        { name: "Mikolaj Czerkawski", profileUrl: "" },
      ],
      softwareEngineers: [
        { name: "Robin Fiévet", profileUrl: "https://www.linkedin.com/in/robin-fievet-6189a431/" },
        { name: "Lori A. Burns", profileUrl: "" },
      ],
    },
    screenshots: [
      {
        url: imgIrisNoMask,
        alt: "Satellite image in IRIS without masking applied",
        caption: "Without masking — raw satellite imagery as seen in the IRIS annotation interface",
        description:
          "The raw satellite image displayed in the IRIS platform before any segmentation mask has been applied, showing the unprocessed multi-spectral view that researchers start with when beginning an annotation session.",
      },
      {
        url: imgIrisGenMask,
        alt: "Satellite image in IRIS with AI-generated segmentation mask applied",
        caption: "With masking — AI-generated segmentation overlay produced by IRIS",
        description:
          "The same satellite image after the AI-assisted segmentation has been applied using gradient boosted decision trees, showing the generated mask overlay that accelerates the creation of training datasets for Earth Observation research.",
      },
      {
        url: imgIrisLanding,
        alt: "IRIS marketing landing page",
        caption: "Standalone marketing landing page built for the IRIS project",
        description:
          "The IRIS landing page built with React 19, Tailwind CSS, and Framer Motion, featuring a dark space-themed design showcasing the platform's features and workflow for potential users and stakeholders in the Earth Observation community.",
      },
    ],
    metrics: [
      { label: "Total commits", value: "276 (across 2 repositories)" },
      { label: "Files changed", value: "274" },
      { label: "Lines added", value: "~40,000 (excl. lock files)" },
      { label: "TypeScript / TSX", value: "+26,470 lines (151 files)" },
      { label: "Python", value: "+8,080 lines (51 files)" },
      { label: "Frontend code", value: "+33,600 lines (161 files)" },
      { label: "Backend & infrastructure", value: "+11,000 lines (76 files)" },
      { label: "Test suite (from scratch)", value: "~14,100 lines (98 files)" },
      { label: "CI/CD workflows", value: "6 GitHub Actions configs" },
    ],
  },
  {
    id: 17,
    title: "Galileo - Copernicus Data Integration & Interactive Tooling",
    description:
      "<a href='https://github.com/nasaharvest/galileo' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Galileo</a> is a family of pretrained foundation models developed by NASA Harvest that learns global and local features from multi-source satellite imagery. The models are pretrained on a variety of remote sensing inputs, including Sentinel-1 (radar imagery) and Sentinel-2 (optical imagery), both from the European Union's <a href='https://browser.dataspace.copernicus.eu/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Copernicus</a> Earth observation program, as well as <a href='https://www.ecmwf.int/en/forecasts/dataset/ecmwf-reanalysis-v5' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>ERA5</a> (weather reanalysis), elevation, and land cover data, and perform well on a range of benchmark tasks such as crop classification, land cover mapping, and vegetation monitoring. These satellite images are large, typically 800MB to 1.5GB each, and time-series analyses can involve dozens of images totaling tens of gigabytes.\n\nResearchers wanting to apply Galileo to new geographic areas had no streamlined way to fetch satellite imagery, prepare it for the model, visualize results, or export outputs for use in <a href='https://en.wikipedia.org/wiki/Geographic_information_system' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>GIS</a> (Geographic Information System) software. This engagement addressed those gaps by integrating Copernicus satellite data into the Galileo pipeline, building interactive visualization applications, and adding modern DevOps practices to the existing codebase.",
    summary:
      "Copernicus satellite data integration, interactive visualization tooling, and DevOps modernization for NASA Harvest's Galileo foundation models",
    imageUrl: imgGalileoThumbnail,
    category: ["ai-ml", "earth-atmospheric-sciences"],
    githubUrls: ["https://github.com/nasaharvest/galileo"],
    demoUrl: [],
    featured: false,
    achievements: [
      "A fully functional Copernicus Data Space Ecosystem client supporting both Sentinel-1 (SAR) and Sentinel-2 (optical) satellite data acquisition with OAuth2 authentication, caching, and automatic deduplication of downloaded images",
      "An interactive <a href='https://marimo.io/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Marimo</a>-based GUI that allows researchers to search, download, browse, visualize, and export satellite imagery without writing code",
      "A Galileo adapter that converts Copernicus satellite images into model-compatible inputs, enabling the model to process newly acquired data from any geographic area",
      "A memory-efficient embedding generation pipeline that writes results to disk instead of accumulating them in RAM, reducing peak memory from double the output size to a fixed amount independent of image dimensions",
      "Five spectral index implementations (<a href='https://en.wikipedia.org/wiki/Normalized_difference_vegetation_index' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>NDVI</a>, <a href='https://en.wikipedia.org/wiki/Normalized_difference_water_index' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>NDWI</a>, <a href='https://en.wikipedia.org/wiki/Enhanced_vegetation_index' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>EVI</a>, <a href='https://en.wikipedia.org/wiki/Soil-adjusted_vegetation_index' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>SAVI</a>, <a href='https://un-spider.org/advisory-support/recommended-practices/recommended-practice-burn-severity/in-detail/normalized-burn-ratio' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>NBR</a>) and eight predefined band visualization recipes covering both optical and SAR data",
      "A quality assessment pipeline with SCL-based cloud masking for Sentinel-2, border noise and invalid pixel detection for Sentinel-1, and a configurable quality gate for automated tile filtering",
      "Modern dependency management via pyproject.toml and <a href='https://docs.astral.sh/uv/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>uv</a>, replacing the previous requirements.txt approach, with <a href='https://github.com/dependabot' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Dependabot</a> for automated dependency updates",
    ],
    goals: [
      "Enable researchers to acquire Sentinel-1 (SAR) and Sentinel-2 (optical) satellite data directly from the Copernicus Data Space Ecosystem and feed it into Galileo models without manual data wrangling",
      "Provide an interactive graphical interface for exploring satellite imagery: searching by location and date, browsing time series, applying predefined visualization presets (e.g., true color, vegetation index, false color), and exporting georeferenced outputs",
      "Build an adapter to convert Copernicus satellite data into Galileo's expected 25-band input format, enabling models to use satellite imagery alone without requiring the full set of auxiliary data sources the model was originally trained on",
      "Establish CI/CD, automated testing, dependency management, and code quality tooling to support sustainable open-source collaboration",
      "Improve the memory efficiency of the embedding generation pipeline to handle large satellite scenes without excessive RAM consumption",
    ],
    softwareSolution:
      "A Python client was built to search and download Sentinel-1 and Sentinel-2 satellite data from the Copernicus Data Space Ecosystem, handling authentication, multi-GB downloads with automatic retry, and deduplication of previously downloaded images. Around this client, a processing library provides image compositing, spectral index computation (<a href='https://en.wikipedia.org/wiki/Normalized_difference_vegetation_index' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>NDVI</a>, <a href='https://en.wikipedia.org/wiki/Normalized_difference_water_index' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>NDWI</a>, <a href='https://en.wikipedia.org/wiki/Enhanced_vegetation_index' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>EVI</a>, <a href='https://en.wikipedia.org/wiki/Soil-adjusted_vegetation_index' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>SAVI</a>, <a href='https://un-spider.org/advisory-support/recommended-practices/recommended-practice-burn-severity/in-detail/normalized-burn-ratio' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>NBR</a>), cloud and noise quality assessment, and <a href='https://en.wikipedia.org/wiki/GeoTIFF' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>GeoTIFF</a> export.\n\nAn interactive notebook application was built using <a href='https://marimo.io/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Marimo</a>, providing researchers with a GUI for the full workflow: configuring credentials, searching and downloading satellite data, browsing images over time, applying visualization presets, and exporting results. For model integration, an adapter converts Copernicus data into Galileo's expected input format, enabling the model to process newly acquired satellite imagery. The embedding generation pipeline was also rewritten to use memory-mapped arrays, keeping RAM usage to a minimum. The project infrastructure was modernized with a GitHub Actions CI pipeline, <a href='https://docs.astral.sh/uv/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>uv</a>-based dependency management, <a href='https://pre-commit.com/' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>pre-commit</a> hooks, <a href='https://github.com/dependabot' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>Dependabot</a>, and coverage reporting.",
    impact: [
      "Researchers can now apply Galileo models to any geographic area by fetching satellite data directly from Copernicus, removing the previous dependency on pre-curated datasets",
      "The interactive GUI lowers the barrier to entry for non-programmers and domain scientists who want to explore satellite imagery and generate model embeddings without Python expertise",
      "The Copernicus-to-Galileo adapter establishes a reusable pattern for integrating additional data sources (<a href='https://www.ecmwf.int/en/forecasts/dataset/ecmwf-reanalysis-v5' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>ERA5</a> weather, <a href='https://www.usgs.gov/centers/eros/science/usgs-eros-archive-digital-elevation-shuttle-radar-topography-mission-srtm-1' target='_blank' rel='noopener noreferrer' class='text-[var(--gt-navy)] hover:text-[var(--gt-gold)] underline'>SRTM</a> elevation, Dynamic World land cover) in future phases, with a documented roadmap and impact analysis for each",
      "The memory-efficient inference module enables processing of larger satellite scenes that would previously have caused out-of-memory failures",
      "The CI/CD infrastructure and code quality tooling set the project up for sustainable open-source collaboration, with automated checks preventing regressions on every contribution",
      "The quality filtering spike and documentation provide a research-backed foundation for implementing automated tile rejection, which is important for operational satellite monitoring pipelines",
      "All contributions have been merged into the upstream NASA Harvest repository (nasaharvest/galileo), directly benefiting the broader remote sensing research community",
    ],
    detailedTechnologies: {
      core: [
        { name: "Python 3.11", url: "https://www.python.org/" },
        { name: "PyTorch", url: "https://pytorch.org/" },
        { name: "NumPy", url: "https://numpy.org/" },
      ],
      geospatial: [
        { name: "Rasterio", url: "https://rasterio.readthedocs.io/" },
        { name: "RioXarray", url: "https://corteva.github.io/rioxarray/" },
        { name: "GeoPandas", url: "https://geopandas.org/" },
        { name: "Shapely", url: "https://shapely.readthedocs.io/" },
      ],
      visualization: [
        { name: "Matplotlib", url: "https://matplotlib.org/" },
        { name: "Marimo", url: "https://marimo.io/" },
      ],
      machineLearning: [
        { name: "scikit-learn", url: "https://scikit-learn.org/" },
      ],
      testing: [
        { name: "pytest", url: "https://docs.pytest.org/" },
      ],
      cicd: [
        { name: "GitHub Actions", url: "https://github.com/features/actions" },
        { name: "pre-commit", url: "https://pre-commit.com/" },
        { name: "Dependabot", url: "https://github.com/dependabot" },
      ],
      codeQuality: [
        { name: "Ruff", url: "https://docs.astral.sh/ruff/" },
        { name: "mypy", url: "https://mypy-lang.org/" },
      ],
      packageManagement: [
        { name: "uv", url: "https://docs.astral.sh/uv/" },
      ],
      containerization: [
        { name: "Docker", url: "https://www.docker.com/" },
      ],
    },
    projectDetails: {
      startDate: "December 2025",
      endDate: "April 2026",
      source: "VISS",
      scientificDomain: "Remote Sensing / Earth Observation / Machine Learning",
      partners: [
        { name: "Gabriel Tseng (Principal Investigator)", profileUrl: "mailto:gabriel.tseng@mila.quebec" },
        { name: "Francis Pelletier", profileUrl: "mailto:francis.pelletier@mila.quebec" },
        { name: "Hannah Kerner", profileUrl: "" },
        { name: "David Rolnick", profileUrl: "" },
      ],
      softwareEngineers: [
        { name: "Robin Fiévet", profileUrl: "https://www.linkedin.com/in/robin-fievet-6189a431/" },
      ],
    },
    screenshots: [
      {
        url: imgGalileo0,
        alt: "Galileo Copernicus satellite data overview",
        caption: "Coordinate bounding box selection and satellite type configuration in the Marimo notebook",
        description:
          "The Marimo notebook interface where researchers define a geographic bounding box and select the satellite type (Sentinel-1 or Sentinel-2) before searching and downloading imagery from the Copernicus Data Space Ecosystem.",
      },
      {
        url: imgGalileo1,
        alt: "Galileo Copernicus satellite data visualization",
        caption: "Satellite imagery visualization through the interactive Marimo notebook",
        description:
          "The Galileo platform displaying Copernicus satellite data with visualization presets applied, enabling researchers to explore Sentinel-1 and Sentinel-2 imagery interactively.",
      },
      {
        url: imgGalileo2,
        alt: "Galileo interactive Marimo GUI for satellite data exploration",
        caption: "Interactive Marimo-based GUI for searching, browsing, and exporting satellite imagery",
        description:
          "The Marimo notebook application providing a graphical interface for the full Copernicus data workflow: credential configuration, satellite data search and download, time-series browsing, visualization preset application, and georeferenced export.",
      },
    ],
    metrics: [
      { label: "Total commits", value: "78 (across 14 merged pull requests)" },
      { label: "Files changed", value: "57" },
      { label: "Lines added", value: "~16,750" },
      { label: "Lines removed", value: "~400" },
      { label: "Python source code", value: "~12,000 lines" },
      { label: "New Copernicus modules", value: "15 (src/data/copernicus/, ~6,700 lines)" },
      { label: "Test files", value: "7 (81 test functions, ~1,950 lines)" },
      { label: "Interactive Marimo GUI", value: "1 application (~2,200 lines)" },
      { label: "Contribution period", value: "December 2025 to April 2026 (~5 months)" },
    ],
  },
];

import { ProjectSchema } from "@/schema";

(() => {
  const errors = projects
    .map((p) => ProjectSchema.safeParse(p))
    .filter((r) => !r.success);

  if (errors.length) {
    console.error("🛑 Static projects validation failed:");
    errors.forEach((r) => {
      console.error(r.error.issues);
    });
  }
})();
