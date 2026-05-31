import type { Metadata } from "next";
import { APP_NAME, SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy - ${APP_NAME}`,
  description: `Privacy Policy for ${APP_NAME}. Learn how we handle your data.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="mt-10 space-y-10 text-foreground leading-relaxed">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-muted">
              This privacy policy applies to the {APP_NAME} mobile application
              (the &ldquo;App&rdquo;). This policy explains how we collect, use,
              and protect information when you use our App.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. Information We Collect
            </h2>
            <p className="text-muted mb-3">
              The App may collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Firebase anonymous user ID</li>
              <li>Favourite prompt records</li>
              <li>Prompt unlock records</li>
              <li>
                Basic app interaction data such as copy count, unlock count, and
                favourite count
              </li>
              <li>
                Advertising identifiers or device identifiers through Google
                AdMob where applicable
              </li>
            </ul>
          </section>

          {/* 3. Information We Do Not Collect */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. Information We Do Not Collect
            </h2>
            <p className="text-muted mb-3">
              The App does not collect any of the following personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Precise GPS location</li>
              <li>Profile photo</li>
            </ul>
          </section>

          {/* 4. Firebase Anonymous Authentication */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Firebase Anonymous Authentication
            </h2>
            <p className="text-muted">
              The App uses Firebase Anonymous Authentication. When you open the
              App, an anonymous user ID is created automatically. This anonymous
              ID is used to save your favourites and unlock records. You do not
              need to create an account or provide any personal information to
              use the App.
            </p>
          </section>

          {/* 5. Prompt Favourites and Unlocks */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              5. Prompt Favourites and Unlocks
            </h2>
            <p className="text-muted">
              Users can save prompts as favourites for quick access. Some prompts
              require watching a rewarded ad to unlock. Unlocks are stored per
              anonymous user and may expire after 7 days.
            </p>
          </section>

          {/* 6. Advertising */}
          <section>
            <h2 className="text-xl font-semibold mb-3">6. Advertising</h2>
            <p className="text-muted">
              The App uses Google AdMob to display advertisements. Ad types may
              include rewarded ads, banner ads, and native ads. Rewarded ads are
              used to unlock premium prompts. The App does not use interstitial
              ads.
            </p>
          </section>

          {/* 7. Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              7. Third-Party Services
            </h2>
            <p className="text-muted mb-3">
              The App uses the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Firebase (Authentication, Firestore)</li>
              <li>Google AdMob (Advertising)</li>
              <li>Google Play Services</li>
            </ul>
            <p className="text-muted mt-3">
              These services may collect information in accordance with their own
              privacy policies.
            </p>
          </section>

          {/* 8. Data Usage */}
          <section>
            <h2 className="text-xl font-semibold mb-3">8. Data Usage</h2>
            <p className="text-muted mb-3">
              The data collected is used for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>App functionality</li>
              <li>Saving favourites</li>
              <li>Managing prompt unlocks</li>
              <li>Showing ads</li>
              <li>Improving prompt popularity ranking</li>
            </ul>
          </section>

          {/* 9. Data Deletion */}
          <section>
            <h2 className="text-xl font-semibold mb-3">9. Data Deletion</h2>
            <p className="text-muted">
              Users can request deletion of their anonymous app data by
              contacting us at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              10. Children&apos;s Privacy
            </h2>
            <p className="text-muted">
              The App is not intended for children under the age of 13. We do
              not knowingly collect personal information from children. If you
              believe a child has provided us with personal information, please
              contact us so we can take appropriate action.
            </p>
          </section>

          {/* 11. Changes to This Policy */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              11. Changes to This Policy
            </h2>
            <p className="text-muted">
              We may update this privacy policy from time to time. Any changes
              will be reflected on this page with an updated revision date. We
              encourage users to review this policy periodically.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section>
            <h2 className="text-xl font-semibold mb-3">12. Contact Us</h2>
            <p className="text-muted">
              If you have any questions or concerns about this privacy policy,
              please contact us at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
