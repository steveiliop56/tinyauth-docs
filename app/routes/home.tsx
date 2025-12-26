import type { Route } from "./+types/home";
import { HomeLayout } from "@/components/layout/home";
import { Link } from "react-router";
import { baseOptions } from "@/lib/layout.shared";
import { Card } from "@/components/card";
import { MdiGithub } from "@/components/github";
import { IcBaselineDiscord } from "@/components/discord";
import { useEffect, useState } from "react";
import CountUp from "@/components/countup";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tinyauth" },
    {
      name: "description",
      content: "The simplest way to protect your apps with a login screen.",
    },
  ];
}

type InstanceResponse = {
  total: number;
  instances: Array<{
    last_seen: string;
    uuid: string;
    version: string;
  }>;
};

const fetchInstances = async (): Promise<InstanceResponse> => {
  const res = await fetch("https://api.tinyauth.app/v1/instances/all");
  if (!res.ok) {
    throw new Error("Failed to fetch instances");
  }
  const data = await res.json();
  return data as InstanceResponse;
};

export default function Home() {
  const [instances, setInstances] = useState(0);

  useEffect(() => {
    fetchInstances().then((data) => {
      setInstances(data.total);
    });
  }, []);

  return (
    <HomeLayout {...baseOptions()}>
      <div className="px-4 pb-4 pt-[5%] flex flex-col items-center flex-1 gap-8 mb-4">
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-4xl font-bold">Tinyauth</h1>
          <p className="max-w-2xl">
            Tinyauth is the easiest way to secure your apps with a login screen.
            Forget endless configuration and complex dashboards and say hello to
            a five-minute installation.
          </p>
          <div className="bg-fd-success/20 border border-fd-success/40 rounded-full px-3 py-1 text-sm font-medium">
            <CountUp
              from={0}
              to={instances}
              separator=","
              direction="up"
              duration={1}
            />
            <span>+ Active Instances</span>
          </div>
          <div className="flex flex-row gap-3">
            <Link
              to="/docs/getting-started"
              className="text-sm text-fd-background bg-fd-info rounded-md font-semibold px-4 py-2.5 hover:opacity-80 hover:scale-105 transition-transform delay-100"
            >
              Get Started
            </Link>
            <Link
              to="https://demo.tinyauth.app"
              className="text-sm bg-fd-card text-fd-primary border border-fd-border rounded-md px-4 py-2.5 hover:opacity-80 hover:scale-105 transition-transform delay-100"
            >
              Demo
            </Link>
          </div>
        </div>
        <img
          className="rounded-md border-fd-border border-2 md:max-w-2xl"
          alt="Screenshot"
          src="/screenshots/tinyauth-dark.png"
        />
        <div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card
              title="Simple"
              description="Tinyauth focuses on simplicity. It is designed to only require environment variables for configuration and works out of the box without the need for fancy dashboards or configuration files."
            />
            <Card
              title="Lightweight"
              description="Tinyauth ships as a single statically linked binary with no dependencies and requires practically no resources to run."
            />
            <Card
              title="OAuth and LDAP support"
              description="With Tinyauth you can you can easily login to your apps using your favorite OAuth providers or by using a centralized LDAP server."
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-2xl font-bold">Join the community</h1>
          <div className="grid md:grid-cols-2 gap-4">
            <Card
              title="GitHub"
              description="Check out the source code, report issues, and contribute to the project on GitHub."
              icon={<MdiGithub className="w-6 h-6 fill-fd-primary" />}
            >
              <div className="flex flex-row gap-3">
                <Link
                  to="https://github.com/steveiliop56/tinyauth"
                  className="text-sm bg-fd-card text-fd-primary border border-fd-border rounded-md px-4 py-2.5 max-w-fit hover:opacity-80 hover:scale-105 transition-transform delay-100"
                >
                  Browse the source
                </Link>
              </div>
            </Card>
            <Card
              title="Discord"
              description="Join our Discord server to chat with the community, ask questions, and get help."
              icon={<IcBaselineDiscord className="w-6 h-6 fill-fd-primary" />}
            >
              <Link
                to="https://discord.gg/eHzVaCzRRd"
                className="text-sm bg-fd-card text-fd-primary border border-fd-border rounded-md px-4 py-2.5 max-w-fit hover:opacity-80 hover:scale-105 transition-transform delay-100"
              >
                Join Discord
              </Link>
            </Card>
          </div>
        </div>
      </div>
      <footer className="w-full border-t border-fd-border bg-fd-card items-center justify-center p-6">
        <p className="text-md font-medium text-center">
          Copyright &copy; {new Date().getFullYear()} Tinyauth
        </p>
      </footer>
    </HomeLayout>
  );
}
