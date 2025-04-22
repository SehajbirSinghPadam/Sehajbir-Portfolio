import React from "react";
import { IconCertificate, IconDownload, IconEye } from "@tabler/icons-react";
import { CertificationInfo } from "../data";

interface CertificationSection {
  category: string;
  certifications: {
    name: string;
    previewUrl: string;
    downloadUrl: string;
  }[];
}

const Certifications: React.FC = () => {
  return (
    <div
      className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono"
      id="Certifications"
    >
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Certifications
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {CertificationInfo.map((section: CertificationSection, index: number) => (
          <div key={index} className="w-[47%] sm-mx:w-full">
            <h2 className="text-2xl text-white font-bold mb-4 text-center">
              {section.category}
            </h2>

            {section.certifications.map((cert, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-duration="800"
                className="border shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out flex flex-col gap-3 border-primaryColor p-4 rounded-2xl mb-4 sm-mx:p-2"
              >
                <div className="flex items-center gap-3">
                  <IconCertificate className="text-primaryColor" size={24} />
                  <span className="text-lg font-semibold text-white">{cert.name}</span>
                </div>
                <div className="flex gap-4 mt-1">
                  <a
                    href={cert.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 bg-primaryColor text-bgColor rounded-lg text-sm font-medium hover:brightness-110 transition"
                  >
                    <IconEye size={18} />
                    Preview
                  </a>
                  <a
                    href={cert.downloadUrl}
                    download
                    className="flex items-center gap-1 px-3 py-1 bg-textColor text-white rounded-lg text-sm font-medium hover:bg-white hover:text-textColor transition"
                  >
                    <IconDownload size={18} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
